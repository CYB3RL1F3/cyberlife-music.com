import { useLiveQuery } from "dexie-react-hooks";
import { toast } from "react-toastify";
import db from "~/db";
import type { CartItemFragment } from "~/types/gql/CartItemFragment";
import type { ReleasesQueryReleaseItems } from "~/types/gql/ReleasesQuery";
import type { FormCheckoutValues } from "~/components/organisms/FormCheckout/FormCheckout.types";
import { useMemo } from "react";
import type { Cart } from "~/db/db";

export type CartItem = Omit<CartItemFragment, "__typename"> & {
    release: ReleasesQueryReleaseItems;
};

export const useCart = () => {
  const cart = useLiveQuery(async () => {
    try {
        return await db.cart.get("cart")
    } catch(e) {
        console.log(e);
        return null
    }
  });

  const updateCart = (values: Partial<Cart>) => {
    if (!cart) {
      db.cart.add({
        consent: false,
        items: [],
        ...values,
      }, "cart");
      return;
    }
    try {
      db.cart.update("cart", {
        ...cart,
        ...values
      });
    } catch(e) {
      const _cart = {...cart};
      db.cart.clear();
      try {
        db.cart.add({
          ..._cart,
          ...values,
        }, "cart");
      } catch(e) {
        db.cart.clear();
        toast.error("An error occurred. Cart has been cleared.");
      }
    }
  }

  const addItem = async (value: CartItem) => {
    try {
      if (cart?.items) {
        await updateCart({
          consent: false,
          items: [...cart.items, value]
        });
      } else {
        await updateCart({
          consent: false,
          items: [value],
        });
      }
    } catch(e) {
      db.cart.clear();
      toast.error("An error occurred. Please try again.");
    }
  };

  const updateItemQuantity = async (id: string, quantity: number) => {
    if (cart) {
      await updateCart({
        consent: false,
        items: cart.items.map((item) => item.id === id ? { ...item, quantity } : item)
      });
    }
  }

  const removeItem = async (id: string) => {
    if (cart) {
      const nextItems = cart.items?.filter((item) => item.id !== id);
      try {
        await db.cart.clear();
        db.cart.add({
          consent: false,
          items: nextItems
        }, "cart");
      } catch(e) {
        console.log('ERROR ====> ', e);
        db.cart.clear();
      }
    }
  };

  const clear = async () => {
    await db.cart.clear();
  }

  const isItemInCart = (id: string) => {
    if (cart?.items?.length) {
      return cart.items.some((item) => item.id === id);
    }
    return false;
  }

  const consentCart = async () => {
    if (!cart?.items) {
      throw new Error("Cart is empty");
    }
    await updateCart({
      consent: true
    });
  }

  const amount = cart?.items?.reduce((acc, item) => acc + item.amount * item.quantity, 0) || 0;

  const setCheckout = async (checkout: FormCheckoutValues) => {
    if (!cart) {
      throw new Error("Cart is empty");
    }
    await updateCart({
      checkout,
      confirmedCheckout: true
    });
  }

  const setConfirmedCheckout = async (confirmedCheckout: boolean) => {
    if (!cart) {
      throw new Error("Cart is empty");
    }
    await updateCart({
      confirmedCheckout
    });
  }

  const currentStep = useMemo(() => {
    if (!cart || typeof cart?.consent === 'undefined') {
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
    isItemInCart
  }
};
