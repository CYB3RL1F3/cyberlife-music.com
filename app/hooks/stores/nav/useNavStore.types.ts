export type LinkNavItem = {
  index: number;
  width: number;
  position: number;
};

export type NavState = {
  currentIndex: number;
  items: LinkNavItem[];
  offset: number;
};

export type NavActions = {
  setItem: (item: LinkNavItem) => void;
  removeItem: (index: LinkNavItem['index']) => void;
  setIndex: (index: LinkNavItem['index']) => void;
  setOffset: (value: number) => void;
};

export type NavStore = NavState & NavActions;
