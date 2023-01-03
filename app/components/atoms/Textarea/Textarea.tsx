import type { ChangeEventHandler } from "react";
import { forwardRef } from "react";
import { useInputStyle } from "~/hooks/useInputStyle";
import type { TextareaProps } from "./Textarea.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ value, onChange, placeholder, hasError, ...props }, ref) => {
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
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        onFocus={onFocus}
        onBlurCapture={onBlur}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
