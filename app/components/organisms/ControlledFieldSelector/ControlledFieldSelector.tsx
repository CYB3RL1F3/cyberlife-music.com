import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import FieldSelector from '~/components/molecules/FieldSelector';

import type { ControlledFieldSelectorProps } from './ControlledFieldSelector.types';

const ControlledFieldSelector = <T extends FieldValues, U>({
  name,
  control,
  ...props
}: ControlledFieldSelectorProps<T, U>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldSelector
          {...field}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};

export default ControlledFieldSelector;
