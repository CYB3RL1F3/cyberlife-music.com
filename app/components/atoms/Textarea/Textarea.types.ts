import type { HTMLProps } from "react";

type TextareaBaseProps = Omit<
  HTMLProps<HTMLTextAreaElement>,
  "value" | "onChange"
>;

export type TextareaProps<T extends string = string> = Omit<
  TextareaBaseProps,
  "ref"
> & {
  value?: T;
  onChange?: (value: T) => void;
  hasError?: boolean;
};
