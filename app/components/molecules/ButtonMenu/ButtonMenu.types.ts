import type { ButtonProps } from "~/components/atoms/Button";

export type ButtonMenuProps = Pick<ButtonProps, "onClick"> & {
  isOpen?: boolean;
};
