import type { HTMLProps } from "react";

type InputBaseProps = Omit<
  HTMLProps<HTMLInputElement>,
  "value" | "onChange" | "ref"
>;

export type InputProps<T extends string = string> = InputBaseProps & {
  value?: T;
  onChange?: (value: T) => void;
  hasError?: boolean;
  onUnfocus?: () => void;
};
