import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import FieldTextarea from '~/components/molecules/FieldTextarea';

import type { ControlledFieldTextareaProps } from './ControlledFieldTextarea.types';

const ControlledFieldTextarea = <T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledFieldTextareaProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldTextarea
          {...field}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};

export default ControlledFieldTextarea;
