import type { ReactNode } from "react";
import type { Routes } from "~/routes/routes";

export type NavItem = {
  index: number;
  width: number;
  position: number;
};

export type NavContextState = {
  currentIndex: number;
  items: NavItem[];
};

export type NavContextAction =
  | {
      type: "ADD_ITEM";
      item: NavItem;
    }
  | {
      type: "REMOVE_ITEM";
      index: NavItem["index"];
    }
  | {
      type: "SET_INDEX";
      index: NavItem["index"];
    };

export type NavContextValues = NavContextState & {
  setItem: (item: NavItem) => void;
};

export type NavContextProviderProps = {
  children: ReactNode;
  routes: readonly Routes[];
};
