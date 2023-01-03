import type { ChangeEventHandler, MutableRefObject } from "react";
import { forwardRef } from "react";
import { useLayoutEffect } from "react";
import { useInputStyle } from "~/hooks/useInputStyle";
import type { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, placeholder, hasError, onChange, onUnfocus = () => {}, ...props },
    ref
  ) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const nextValue = e.currentTarget.value;
      onChange?.(nextValue);
    };

    const inputClassName = "h-10 leading-[3rem]";
    const { className, onFocus, onBlur } = useInputStyle(
      hasError,
      inputClassName
    );

    useLayoutEffect(() => {
      const current = (ref as MutableRefObject<HTMLInputElement | null>)
        ?.current;
      current?.addEventListener("blur", onUnfocus);
      return () => {
        current?.removeEventListener("blue", onUnfocus);
      };
    }, [onUnfocus, ref]);

    return (
      <input
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlurCapture={onBlur}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
