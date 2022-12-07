import type { SwitchProps } from "~/components/atoms/Switch/Switch.types";
import type { ReactNode } from "react";

export type FieldSwitchProps = Pick<
  SwitchProps,
  "value" | "onChange" | "id"
> & {
  label: ReactNode;
};
