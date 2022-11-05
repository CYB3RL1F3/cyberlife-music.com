import React, { useEffect, useCallback, useReducer } from "react";
import { NavContext } from "./NavContext";
import { navContextReducer } from "./NavContext.reducer";
import { useLocation } from "@remix-run/react";
import type {
  NavContextProviderProps,
  NavContextState,
  NavItem
} from "./NavContext.types";
import { getCurrentRouteIndex } from "./NavContext.utils";

const initialState: NavContextState = {
  currentIndex: -1,
  items: []
};

const NavContextProvider = ({ children, routes }: NavContextProviderProps) => {
  const [navContextState, dispatch] = useReducer(
    navContextReducer,
    initialState
  );

  const setItem = useCallback((value: NavItem) => {
    dispatch({
      type: "ADD_ITEM",
      item: value
    });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    const index = getCurrentRouteIndex(routes, pathname);
    dispatch({
      type: "SET_INDEX",
      index
    });
  }, [pathname, routes]);

  return (
    <NavContext.Provider
      value={{
        ...navContextState,
        setItem
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
