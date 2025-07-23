import type { SelectorProps } from "~/components/molecules/Selector/Selector.types";
import type { ReactNode } from "react";

export type FieldSelectorProps<T> = SelectorProps<T> & {
  error?: ReactNode;
};
