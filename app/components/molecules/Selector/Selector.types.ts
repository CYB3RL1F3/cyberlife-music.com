import { DropdownProps } from "~/components/atoms/Dropdown/Dropdown.types";
import { ReactNode } from "react";

export type Item<T = string> = {
  label: string;
  value: T;
  icon?: ReactNode;
  id: string;
};

export type SelectorProps<T = string> = {
  onChange?: (value?: T, index?: number) => void;
  value?: T;
  defaultValue?: T;
  label: ReactNode;
  icon?: ReactNode;
  items: Item<T>[];
  isSelected?: (item: T, value?: T) => boolean;
} & Pick<DropdownProps<Item<T>>, "disabled" | "position" | "filterPlaceholder" |"filterable" >;
