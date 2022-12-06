import type { ReactEventHandler, ReactNode } from "react";
export type ActionProps = {
  children?: ReactNode;
  className?: string;
  style?: Object;
  onClick: ReactEventHandler<HTMLButtonElement>;
  title?: string;
  disabled?: boolean;
};
