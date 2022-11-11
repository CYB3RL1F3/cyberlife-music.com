import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldInputProps } from "~/components/molecules/FieldInput";

export type ControlledFieldInputProps<T extends FieldValues> = Omit<
  FieldInputProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
