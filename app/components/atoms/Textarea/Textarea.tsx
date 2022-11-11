import type { ChangeEventHandler } from "react";
import { useInputStyle } from "~/hooks/useInputStyle";
import type { TextareaProps } from "./Textarea.types";

const Textarea = ({
  value,
  onChange,
  placeholder,
  hasError,
  ...props
}: TextareaProps) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const nextValue = e.currentTarget.value;
    onChange?.(nextValue);
  };
  const textareaClassName = "min-h-[10rem]";
  const { className, onFocus, onBlur } = useInputStyle(
    hasError,
    textareaClassName
  );

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      onFocus={onFocus}
      onBlurCapture={onBlur}
      {...props}
    />
  );
};

export default Textarea;
