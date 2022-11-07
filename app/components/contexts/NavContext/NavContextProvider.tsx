import React, { useEffect, useCallback, useReducer } from "react";
import { NavContext } from "./NavContext";
import { navContextReducer } from "./NavContext.reducer";
import { useLocation } from "@remix-run/react";
import type {
  NavContextProviderProps,
  NavContextState,
  LinkNavItem
} from "./NavContext.types";
import { getCurrentRouteIndex } from "./NavContext.utils";

const initialState: NavContextState = {
  currentIndex: -1,
  items: [],
  offset: 0
};

const NavContextProvider = ({ children, routes }: NavContextProviderProps) => {
  const [navContextState, dispatch] = useReducer(
    navContextReducer,
    initialState
  );

  const setItem = useCallback((item: LinkNavItem) => {
    dispatch({
      type: "ADD_ITEM",
      item
    });
  }, []);
  const setOffset = useCallback((offset: number) => {
    dispatch({
      type: "SET_OFFSET",
      offset
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
        setItem,
        setOffset
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
