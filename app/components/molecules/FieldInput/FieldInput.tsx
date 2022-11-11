import Input from "~/components/atoms/Input";
import FieldWrapper from "../FieldWrapper";
import type { FieldInputProps } from "./FieldInput.types";
import { useState } from "react";
import { useEffect } from "react";

const FieldInput = ({ error, ...props }: FieldInputProps) => {
  const [canShow, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!canShow) return null;
  return (
    <FieldWrapper error={error}>
      <Input hasError={!!error} {...props} />
    </FieldWrapper>
  );
};

export default FieldInput;
