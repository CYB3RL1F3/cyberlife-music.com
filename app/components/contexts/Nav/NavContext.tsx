import { createContext } from "react";
import type { NavContextValues } from "./NavContext.types";

export const NavContext = createContext<NavContextValues>({
  currentIndex: -1,
  items: [],
  setItem: () => undefined
});
