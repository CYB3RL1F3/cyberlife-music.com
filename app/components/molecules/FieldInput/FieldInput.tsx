import Input from "~/components/atoms/Input";
import FieldWrapper from "../FieldWrapper";
import type { FieldInputProps } from "./FieldInput.types";
import { forwardRef, useState } from "react";
import { useEffect } from "react";

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ error, ...props }, ref) => {
    const [canShow, setShow] = useState(false);
    useEffect(() => {
      setShow(true);
    }, []);
    if (!canShow) return null;
    return (
      <FieldWrapper error={error}>
        <Input ref={ref} hasError={!!error} {...props} />
      </FieldWrapper>
    );
  }
);

FieldInput.displayName = "FieldInput";

export default FieldInput;
