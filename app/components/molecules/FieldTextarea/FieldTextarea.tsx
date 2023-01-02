import Textarea from "~/components/atoms/Textarea";
import FieldWrapper from "../FieldWrapper";
import type { FieldTextareaProps } from "./FieldTextarea.types";
import { forwardRef } from "react";

const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextareaProps>(
  ({ error, ...props }, ref) => {
    return (
      <FieldWrapper error={error}>
        <Textarea ref={ref} hasError={!!error} {...props} />
      </FieldWrapper>
    );
  }
);

FieldTextarea.displayName = "FieldTextarea";

export default FieldTextarea;
