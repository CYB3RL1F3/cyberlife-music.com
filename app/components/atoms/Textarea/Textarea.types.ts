import type { HTMLProps } from "react";

type TextareaBaseProps = Omit<
  HTMLProps<HTMLTextAreaElement>,
  "value" | "onChange"
>;

export type TextareaProps<T extends string = string> = TextareaBaseProps & {
  value?: T;
  onChange?: (value: T) => void;
  hasError?: boolean;
};
