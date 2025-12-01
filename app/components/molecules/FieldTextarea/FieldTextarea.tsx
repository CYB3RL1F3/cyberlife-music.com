import { forwardRef } from 'react';
import Textarea from '~/components/atoms/Textarea';
import FieldWrapper from '~/components/molecules/FieldWrapper';

import type { FieldTextareaProps } from './FieldTextarea.types';

const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextareaProps>(
  ({ error, ...props }, ref) => {
    return (
      <FieldWrapper error={error}>
        <Textarea ref={ref} hasError={!!error} {...props} />
      </FieldWrapper>
    );
  },
);

FieldTextarea.displayName = 'FieldTextarea';

export default FieldTextarea;
