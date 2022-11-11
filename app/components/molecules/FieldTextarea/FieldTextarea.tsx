import Textarea from "~/components/atoms/Textarea";
import FieldWrapper from "../FieldWrapper";
import type { FieldTextareaProps } from "./FieldTextarea.types";

const FieldTextarea = ({ error, ...props }: FieldTextareaProps) => {
  return (
    <FieldWrapper error={error}>
      <Textarea hasError={!!error} {...props} />
    </FieldWrapper>
  );
};

export default FieldTextarea;
