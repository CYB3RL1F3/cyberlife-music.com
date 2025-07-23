import Selector from "~/components/molecules/Selector";
import FieldWrapper from "~/components/molecules/FieldWrapper";
import type { FieldSelectorProps } from "./FieldSelector.types";
import { useState, useEffect } from "react";

const FieldSelector = <T,>({ error, ...props }: FieldSelectorProps<T>) => {
  const [canShow, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!canShow) return null;
  return (
    <FieldWrapper error={error}>
      <Selector {...props} />
    </FieldWrapper>
  );
}

FieldSelector.displayName = "FieldSelector";

export default FieldSelector;
