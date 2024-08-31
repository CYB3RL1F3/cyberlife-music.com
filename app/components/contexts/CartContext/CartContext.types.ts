import type { ReactNode } from "react";
import type { CartItemFragment } from "~/types/gql/CartItemFragment";
import type { ExpeditionFragment } from "~/types/gql/ExpeditionFragment";
import type { ReleasesQueryReleaseItems } from "~/types/gql/ReleasesQuery";

export type CartItem = Omit<CartItemFragment, "__typename"> & {
  release: ReleasesQueryReleaseItems;
};

export type CartContextState = {
  items: CartItem[];
  expedition: ExpeditionFragment;
  totalAmount: number;
};

export type CartContextActions = {
  addItem: (release: ReleasesQueryReleaseItems) => void;
  removeItem: (id: string) => void;
  setItemQuantity: (id: string, quantity: number) => void;
  setExpedition: (expedition: ExpeditionFragment) => void;
  isItemInCart: (id: string) => boolean;
};

export type QuantityPayload = { id: string; quantity: number };

export type CartContextType = CartContextState & CartContextActions;

export type CartContextAction =
  | {
      type: "ADD_ITEM";
      payload: CartItem;
    }
  | {
      type: "SET_ITEM_QUANTITY";
      payload: QuantityPayload;
    }
  | {
      type: "REMOVE_ITEM";
      payload: string;
    }
  | {
      type: "SET_EXPEDITION";
      payload: ExpeditionFragment;
    };

export type CartContextProviderProps = {
  children: ReactNode;
};
