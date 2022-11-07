import type { ReactNode } from "react";
import type { Routes } from "~/routes/routes";

export type LinkNavItem = {
  index: number;
  width: number;
  position: number;
};

export type NavContextState = {
  currentIndex: number;
  items: LinkNavItem[];
  offset: number;
};

export type NavContextAction =
  | {
      type: "ADD_ITEM";
      item: LinkNavItem;
    }
  | {
      type: "REMOVE_ITEM";
      index: LinkNavItem["index"];
    }
  | {
      type: "SET_INDEX";
      index: LinkNavItem["index"];
    }
  | {
      type: "SET_OFFSET";
      offset: number;
    };

export type NavContextValues = NavContextState & {
  setItem: (item: LinkNavItem) => void;
  setOffset: (value: number) => void;
};

export type NavContextProviderProps = {
  children: ReactNode;
  routes: readonly Routes[];
};
