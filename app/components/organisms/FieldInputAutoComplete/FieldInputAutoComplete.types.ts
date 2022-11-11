import type { AutoCompleteProps } from "~/components/atoms/AutoComplete";
import type { FieldInputProps } from "~/components/molecules/FieldInput";

export type FieldInputAutoCompleteProps = Omit<
  FieldInputProps,
  "values" | "size"
> &
  Pick<AutoCompleteProps, "values" | "size">;
