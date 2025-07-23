import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldCheckboxProps } from "~/components/molecules/FieldCheckbox";

export type ControlledFieldCheckboxProps<T extends FieldValues> = Omit<
  FieldCheckboxProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
