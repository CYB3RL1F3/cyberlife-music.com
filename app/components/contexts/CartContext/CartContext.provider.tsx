import { useCallback, useReducer } from "react";
import { CartContext } from "./CartContext";
import cartContextReducer, { initialState } from "./CartContext.reducer";
import type { CartContextProviderProps, CartItem } from "./CartContext.types";
import type { ExpeditionFragment } from "~/types/gql/ExpeditionFragment";
import type { ReleasesQueryReleaseItems } from "~/types/gql/ReleasesQuery";

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartContextState, dispatch] = useReducer(
    cartContextReducer,
    initialState
  );

  const addItem = (release: ReleasesQueryReleaseItems) => {
    const { price, id } = release;
    if (!id || !price) return;
    const payload: CartItem = {
      id: id,
      quantity: 1,
      amount: price,
      productId: id,
      release
    };
    dispatch({
      type: "ADD_ITEM",
      payload
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  };

  const setItemQuantity = (id: string, quantity: number) => {
    dispatch({
      type: "SET_ITEM_QUANTITY",
      payload: {
        id,
        quantity
      }
    });
  };

  const setExpedition = (expedition: ExpeditionFragment) => {
    dispatch({
      type: "SET_EXPEDITION",
      payload: expedition
    });
  };

  const { items, totalAmount, expedition } = cartContextState;

  const isItemInCart = useCallback(
    (id: string) => {
      return items.some((item) => item.id === id);
    },
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        expedition,
        addItem,
        removeItem,
        setItemQuantity,
        setExpedition,
        isItemInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
