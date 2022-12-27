import type { ReactEventHandler, ReactNode } from "react";

export type ButtonProps = {
  type?: "button" | "submit";
  onClick?: ReactEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  title?: string;
  className?: string;
  variant?: "button" | "link";
};
