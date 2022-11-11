import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import FieldInputAutoComplete from "~/components/organisms/FieldInputAutoComplete";
import type { ControlledFieldInputAutoCompleteProps } from "./ControlledFieldInputAutoComplete.types";

const ControlledFieldInputAutoComplete = <T extends FieldValues>({
  name,
  control,
  values,
  placeholder,
  size
}: ControlledFieldInputAutoCompleteProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldInputAutoComplete
          {...field}
          error={fieldState.error?.message}
          values={values}
          size={size}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default ControlledFieldInputAutoComplete;
