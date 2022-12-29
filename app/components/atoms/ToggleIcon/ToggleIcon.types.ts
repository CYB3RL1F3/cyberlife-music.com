import type { ReactNode } from "react";

export type ToggleIconProps = {
  active: boolean;
  value?: string;
  setActive?: (active: boolean) => void;
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
  className?: string;
};
