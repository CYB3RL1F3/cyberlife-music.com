import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldInputAutoCompleteProps } from "~/components/organisms/FieldInputAutoComplete";

export type ControlledFieldInputAutoCompleteProps<T extends FieldValues> = Omit<
  FieldInputAutoCompleteProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
  values: string[];
};
