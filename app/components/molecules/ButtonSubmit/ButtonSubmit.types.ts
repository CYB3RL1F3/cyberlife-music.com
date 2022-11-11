import type { ButtonProps } from "~/components/atoms/Button";

export type ButtonSubmitProps = Omit<ButtonProps, "type"> & {
  loading?: boolean;
};
