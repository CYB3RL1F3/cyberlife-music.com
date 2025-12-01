import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import FieldInput from '~/components/molecules/FieldInput';

import type { ControlledFieldInputProps } from './ControlledFieldInput.types';

const ControlledFieldInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledFieldInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldInput {...field} error={fieldState.error?.message} {...props} />
      )}
    />
  );
};

export default ControlledFieldInput;
