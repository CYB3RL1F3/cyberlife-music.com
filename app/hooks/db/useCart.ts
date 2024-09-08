import { useLiveQuery } from "dexie-react-hooks";
import { toast } from "react-toastify";
import db from "~/db";
import { CartItemFragment } from "~/types/gql/CartItemFragment";
import { ReleasesQueryReleaseItems } from "~/types/gql/ReleasesQuery";

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

  const addItem = async (value: CartItem) => {
    try {
      if (cart?.items) {
        await db.cart.update("cart", {
          consent: false,
          items: [...cart.items, value]
        } );
      } else {
        await db.cart.add({
          consent: false,
          items: [value],
        }, "cart");
      }
    } catch(e) {
      db.cart.clear();
      toast.error("An error occurred. Please try again.");
    }
  };

  const updateItemQuantity = async (id: string, quantity: number) => {
    if (cart) {
      await db.cart.update("cart", {
        consent: false,
        items: cart.items.map((item) => item.id === id ? { ...item, quantity } : item)
      });
    }
  }

  const removeItem = async (id: string) => {
    console.log('ITEMS ==> ', cart);
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

  const clear = () => {
    db.cart.clear();
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
    await db.cart.update("cart", {
      consent: true,
      items: cart.items
    });
  }

  const amount = cart?.items?.reduce((acc, item) => acc + item.amount * item.quantity, 0) || 0;

  return {
    items: cart?.items || [],
    consent: cart?.consent,
    consentCart,
    amount,
    addItem,
    removeItem,
    updateItemQuantity,
    clear,
    isItemInCart
  }
};
