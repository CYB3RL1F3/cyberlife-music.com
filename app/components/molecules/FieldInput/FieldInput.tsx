import { useState, useEffect } from 'react';
import Input from '~/components/atoms/Input';
import FieldWrapper from '~/components/molecules/FieldWrapper';

import type { FieldInputProps } from './FieldInput.types';

const FieldInput = ({ error, ref, ...props }: FieldInputProps) => {
  const [canShow, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!canShow) return null;

  return (
    <FieldWrapper error={error}>
      <Input ref={ref} hasError={!!error} {...props} />
    </FieldWrapper>
  );
};

FieldInput.displayName = 'FieldInput';

export default FieldInput;
