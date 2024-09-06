import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import FieldSwitch from "~/components/molecules/FieldSwitch";
import type { ControlledFieldSwitchProps } from "./ControlledFieldSwitch.types";

const ControlledFieldSwitch = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledFieldSwitchProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldSwitch
          {...field}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};

export default ControlledFieldSwitch;
