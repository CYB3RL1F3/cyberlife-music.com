import type { Control, FieldValue, FieldValues } from "react-hook-form";
import type { CarrierSelectorProps } from "~/components/organisms/CarrierSelector";

export type ControlledFieldCarrierSelectorProps<T extends FieldValues> = Omit<
CarrierSelectorProps,
  "value" | "onChange"
> & {
  control: Control<T, any>;
  name: FieldValue<T>;
};
