import { createContext } from "react";
import { initialState } from "./NavContext.reducer";
import type { NavContextValues } from "./NavContext.types";

export const NavContext = createContext<NavContextValues>({
  ...initialState,
  setItem: () => undefined,
  setOffset: () => undefined
});
