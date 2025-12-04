import type { ChangeEventHandler } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useInputStyle } from '~/hooks/misc/useInputStyle';
import type { TextareaProps } from './Textarea.types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      onChange,
      placeholder,
      hasError,
      className: customClassName,
      ...props
    },
    ref,
  ) => {
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      const nextValue = e.currentTarget.value;
      onChange?.(nextValue);
    };
    const textareaClassName = 'min-h-40';
    const { className, onFocus, onBlur } = useInputStyle(
      hasError,
      textareaClassName,
    );

    return (
      <textarea
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={twMerge(className, customClassName)}
        onFocus={onFocus}
        onBlurCapture={onBlur}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
