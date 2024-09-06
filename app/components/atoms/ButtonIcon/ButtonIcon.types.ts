import type { MouseEventHandler, ReactNode } from "react";

export type ButtonIconProps = {
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  size?: number;
  type?: "button" | "submit" | "reset";
};
