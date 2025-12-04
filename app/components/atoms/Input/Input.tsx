import type { ChangeEventHandler, FocusEventHandler, RefObject } from 'react';
import { useLayoutEffect } from 'react';
import { useInputStyle } from '~/hooks/misc/useInputStyle';
import type { InputProps } from './Input.types';
import { twMerge } from 'tailwind-merge';

const Input = ({
  value,
  placeholder,
  hasError,
  onChange,
  onFocus,
  onUnfocus = () => {},
  className: customClassName,
  ref,
  ...props
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.currentTarget.value;
    onChange?.(nextValue);
  };

  const inputClassName = 'h-10 leading-12';
  const {
    className,
    onFocus: onInputFocus,
    onBlur,
  } = useInputStyle(hasError, inputClassName);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus?.(e);
    onInputFocus?.();
  };

  useLayoutEffect(() => {
    const current = (ref as RefObject<HTMLInputElement>)?.current;
    current?.addEventListener('blur', onUnfocus);
    return () => {
      current?.removeEventListener('blur', onUnfocus);
    };
  }, [onUnfocus, ref]);

  const handleBlur = () => {
    onBlur?.();
    onUnfocus();
  };

  return (
    <input
      className={twMerge(className, customClassName)}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlurCapture={handleBlur}
      ref={ref}
      {...props}
    />
  );
};

Input.displayName = 'Input';

export default Input;
