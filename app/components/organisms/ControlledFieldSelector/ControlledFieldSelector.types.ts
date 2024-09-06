import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldSelectorProps } from "~/components/molecules/FieldSelector";

export type ControlledFieldSelectorProps<T extends FieldValues, U> = Omit<
  FieldSelectorProps<U>,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
