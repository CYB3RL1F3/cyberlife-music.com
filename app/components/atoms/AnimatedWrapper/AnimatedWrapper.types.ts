import type { ReactNode } from "react";
export type AnimatedWrapperProps = {
  children?: ReactNode;
  key: string;
  delay: number;
  className?: string;
};
