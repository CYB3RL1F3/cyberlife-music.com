import { useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { toast } from 'react-toastify';
import db from '~/db';
import type { CartItemFragment } from '~/types/gql/CartItemFragment';
import type { ReleasesQueryReleaseItems } from '~/types/gql/ReleasesQuery';
import type { FormCheckoutValues } from '~/components/organisms/FormCheckout/FormCheckout.types';
import type { Cart } from '~/db/db.types';

export type CartItem = Omit<CartItemFragment, '__typename'> & {
  release: ReleasesQueryReleaseItems;
};

export const useCart = () => {
  const [cart, loaded] = useLiveQuery(
    async () => {
      try {
        const cart = await db.cart.get('cart');
        return [cart, true] as const;
      } catch (e) {
        console.error(e);
        return [null, true] as const;
      }
    },
    [],
    [null, false],
  );

  const updateCart = (values: Partial<Cart>) => {
    if (!cart) {
      db.cart.add(
        {
          consent: false,
          items: [],
          ...values,
        },
        'cart',
      );
      return;
    }
    try {
      db.cart.update('cart', {
        ...cart,
        ...values,
      });
    } catch (e) {
      const _cart = { ...cart };
      db.cart.clear();
      try {
        db.cart.add(
          {
            ..._cart,
            ...values,
          },
          'cart',
        );
      } catch (e) {
        db.cart.clear();
        toast.error('An error occurred. Cart has been cleared.');
      }
    }
  };

  const addItem = async (value: CartItem) => {
    try {
      if (cart?.items) {
        await updateCart({
          consent: false,
          items: [...cart.items, value],
        });
      } else {
        await updateCart({
          consent: false,
          items: [value],
        });
      }
    } catch (e) {
      db.cart.clear();
      toast.error('An error occurred. Please try again.');
    }
  };

  const updateItemQuantity = async (id: string, quantity: number) => {
    if (cart) {
      await updateCart({
        consent: false,
        items: cart.items.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      });
    }
  };

  const removeItem = async (id: string) => {
    if (cart) {
      const nextItems = cart.items?.filter((item) => item.id !== id);
      try {
        await db.cart.clear();
        db.cart.add(
          {
            consent: false,
            items: nextItems,
          },
          'cart',
        );
      } catch (e) {
        console.error('ERROR ====> ', e);
        db.cart.clear();
      }
    }
  };

  const clear = async () => {
    await db.cart.clear();
  };

  const isItemInCart = (id: string) => {
    if (cart?.items?.length) {
      return cart.items.some((item) => item.id === id);
    }
    return false;
  };

  const consentCart = async () => {
    if (!cart?.items) {
      throw new Error('Cart is empty');
    }
    await updateCart({
      consent: true,
    });
  };

  const amount =
    cart?.items?.reduce((acc, item) => acc + item.amount * item.quantity, 0) ||
    0;

  const setCheckout = async (checkout: FormCheckoutValues) => {
    if (!cart) {
      throw new Error('Cart is empty');
    }
    await updateCart({
      checkout,
      confirmedCheckout: true,
    });
  };

  const setConfirmedCheckout = async (confirmedCheckout: boolean) => {
    if (!cart) {
      throw new Error('Cart is empty');
    }
    await updateCart({
      confirmedCheckout,
    });
  };

  const currentStep = useMemo(() => {
    if (!cart) {
      return -1;
    }
    if (cart?.checkout && cart?.confirmedCheckout && cart?.consent) {
      return 2;
    }
    if (cart?.consent) {
      return 1;
    }
    return 0;
  }, [cart?.consent, cart?.checkout, cart?.confirmedCheckout]);

  return {
    loaded,
    items: cart?.items || [],
    consent: cart?.consent,
    consentCart,
    confirmedCheckout: cart?.confirmedCheckout,
    setConfirmedCheckout,
    checkout: cart?.checkout,
    setCheckout,
    currentStep,
    amount,
    addItem,
    removeItem,
    updateItemQuantity,
    clear,
    isItemInCart,
  };
};
