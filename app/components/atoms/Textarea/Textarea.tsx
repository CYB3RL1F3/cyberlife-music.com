import type { ChangeEventHandler } from 'react';
import { forwardRef } from 'react';
import { useInputStyle } from '~/hooks/misc/useInputStyle';
import type { TextareaProps } from './Textarea.types';
import { twMerge } from 'tailwind-merge';

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
    const textareaClassName = 'min-h-[10rem]';
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
