import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import CarrierSelector from "~/components/organisms/CarrierSelector";
import type { ControlledFieldCarrierSelectorProps } from "./ControlledFieldCarrierSelector.types";
import FieldWrapper from "~/components/molecules/FieldWrapper";

const ControlledCarrierSelector = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledFieldCarrierSelectorProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper error={fieldState.error?.message}>
          <CarrierSelector {...field} {...props} />
        </FieldWrapper>
      )}
    />
  );
};

export default ControlledCarrierSelector;
