import { useLiveQuery } from "dexie-react-hooks";
import db from "~/db";
import { CartItemFragment } from "~/types/gql/CartItemFragment";
import { ReleasesQueryReleaseItems } from "~/types/gql/ReleasesQuery";

export type CartItem = Omit<CartItemFragment, "__typename"> & {
    release: ReleasesQueryReleaseItems;
};

export const useCart = () => {
  const items = useLiveQuery(async () => {
    try {
        return await db.cart.get("cart")
    } catch(e) {
        console.log(e);
        return null
    }
  });

  const addItem = async (value: CartItem) => {
    if (items) {
      await db.cart.update("cart", [...items, value]);
    } else {
      await db.cart.add([value], "cart");
    }
  };

  const updateItemQuantity = async (id: string, quantity: number) => {
    if (items) {
      await db.cart.update("cart", items.map((item) => item.id === id ? { ...item, quantity } : item));
    }
  }

  const removeItem = async (id: string) => {
    console.log('ITEMS ==> ', items);
    if (items) {
      const nextItems = items.filter((item) => item.id !== id);
      try {
        await db.cart.clear();
        db.cart.add(nextItems, "cart");
      } catch(e) {
        console.log('ERROR ====> ', e);
      }
    }
  };

  const clear = () => {
    db.cart.clear();
  }

  const isItemInCart = (id: string) => {
    if (items) {
      return items.some((item) => item.id === id);
    }
    return false;
  }

  const amount = items?.reduce((acc, item) => acc + item.amount * item.quantity, 0) || 0;

  console.log('RENDER ITEMS ===> ', items);
  return {
    items: items || [],
    amount,
    addItem,
    removeItem,
    updateItemQuantity,
    clear,
    isItemInCart
  }
};
