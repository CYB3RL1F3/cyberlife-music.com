import type { ReactElement } from "react";
import type { AutoCompleteItemProps } from "~/components/atoms/AutoCompleteItem";

export type AutoCompleteProps = {
  values: string[];
  onSelect?: (value: string) => void;
  size: string;
  disabled?: boolean;
  autoCompleteItem: (props: AutoCompleteItemProps) => ReactElement;
};
