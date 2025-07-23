import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldSwitchProps } from "~/components/molecules/FieldSwitch";

export type ControlledFieldSwitchProps<T extends FieldValues> = Omit<
  FieldSwitchProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
