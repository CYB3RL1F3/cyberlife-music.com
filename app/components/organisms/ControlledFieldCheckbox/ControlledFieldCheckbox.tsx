import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import FieldCheckbox from "~/components/molecules/FieldCheckbox";
import type { ControlledFieldCheckboxProps } from "./ControlledFieldCheckbox.types";

const ControlledFieldCheckbox = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledFieldCheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldCheckbox
          {...field}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};

export default ControlledFieldCheckbox;
