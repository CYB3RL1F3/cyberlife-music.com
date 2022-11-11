import type { TextareaProps } from "~/components/atoms/Textarea";
import type { FieldWrapperProps } from "../FieldWrapper";

export type FieldTextareaProps = Omit<TextareaProps, "hasError"> &
  FieldWrapperProps;
