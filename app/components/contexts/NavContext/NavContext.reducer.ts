import type { NavContextAction, NavContextState } from "./NavContext.types";

export const initialState: NavContextState = {
  items: [],
  currentIndex: -1,
  offset: 0
};

export const navContextReducer = (
  state = initialState,
  action: NavContextAction
) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const items = [...state.items];
      items[action.item.index] = action.item;
      return {
        ...state,
        items
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.index)
      };
    case "SET_INDEX":
      return {
        ...state,
        currentIndex: action.index
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.offset
      };
    default:
      return state;
  }
};
