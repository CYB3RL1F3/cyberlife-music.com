import type { CheckboxProps } from "~/components/atoms/Checkbox/Checkbox.types";
import type { ReactNode } from "react";

export type FieldCheckboxProps = Pick<
  CheckboxProps,
  "value" | "onChange" | "id"
> & {
  label: ReactNode;
  error?: ReactNode;
};
