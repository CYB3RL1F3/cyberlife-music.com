import type { MouseEventHandler, ReactNode } from "react";

export type ButtonIconProps = {
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
