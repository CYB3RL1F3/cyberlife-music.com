// useNavStore.ts
import { create } from 'zustand';
import type { NavStore, NavState, LinkNavItem } from './useNavStore.types';

const initialState: NavState = {
  currentIndex: -1,
  items: [],
  offset: 0,
};

export const useNavStore = create<NavStore>((set) => ({
  ...initialState,

  setItem: (item: LinkNavItem) =>
    set((state) => {
      const items = [...state.items];
      items[item.index] = item;
      return { ...state, items };
    }),

  removeItem: (index) =>
    set((state) => ({
      ...state,
      items: state.items.filter((_, i) => i !== index),
    })),

  setIndex: (index) =>
    set((state) => ({
      ...state,
      currentIndex: index,
    })),

  setOffset: (value) =>
    set((state) => ({
      ...state,
      offset: value,
    })),
}));
