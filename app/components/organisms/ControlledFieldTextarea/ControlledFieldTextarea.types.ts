import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { FieldTextareaProps } from "~/components/molecules/FieldTextarea";

export type ControlledFieldTextareaProps<T extends FieldValues> = Omit<
  FieldTextareaProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
