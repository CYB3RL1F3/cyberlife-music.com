import type { ChangeEventHandler, MutableRefObject } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useInputStyle } from "~/hooks/useInputStyle";
import type { InputProps } from "./Input.types";

const Input = ({
  value,
  placeholder,
  hasError,
  onChange,
  onUnfocus = () => {},
  ...props
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.currentTarget.value;
    onChange?.(nextValue);
  };

  const inputClassName = "h-10 leading-[3rem]";
  const { className, onFocus, onBlur } = useInputStyle(
    hasError,
    inputClassName
  );

  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  useLayoutEffect(() => {
    const current = ref.current;
    current?.addEventListener("blur", onUnfocus);
    return () => {
      current?.removeEventListener("blue", onUnfocus);
    };
  }, [onUnfocus]);

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
};

export default Input;
