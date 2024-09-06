import { ReactNode } from "react";

export type DropdownItemProps<T> = {
  children: ReactNode;
  disabled?: boolean;
  value: T;
  onSelect?: (value: T) => void;
  className?: string;
};

export type DropdownItemsProps<T> = {
  items: T[];
  value?: T;
  onChange?: (value: T, index: number) => void;
  itemToKey?: (item: T) => string;
  isSelected?: (item: T, value?: T) => boolean;
  render: (
    item: T,
    selected: boolean,
    value: DropdownItemsProps<T>["value"],
    index: number
  ) => React.ReactNode;
};

export type DropdownWrapperProps = {
  children: ReactNode;
  label?: ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
  handleClickOutside?: boolean;
  position?: "top" | "bottom";
  onToggle?: () => void;
  dropdownButton?: (
    isOpen: boolean,
    toggle?: () => void,
    label?: ReactNode,
    disabled?: boolean
  ) => ReactNode;
};

export type DropdownProps<T> = Omit<
  DropdownItemsProps<T> & DropdownWrapperProps,
  "children" | "onToggle"
> & {
  closeOnSelect?: boolean;
  filterable?: boolean;
  useFilter?: (value: string) => T[];
  filterPlaceholder?: string;
};
