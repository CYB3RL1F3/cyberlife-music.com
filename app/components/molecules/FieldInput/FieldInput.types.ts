import type { InputProps } from "~/components/atoms/Input";
import type { FieldWrapperProps } from "../FieldWrapper";

export type FieldInputProps = Omit<InputProps, "hasError"> & FieldWrapperProps;
