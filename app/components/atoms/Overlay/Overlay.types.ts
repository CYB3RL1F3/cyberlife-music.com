import type { ReactNode } from "react";

export type OverlayProps = {
  containerClassName?: string;
  fullscreen?: boolean;
  isOpen?: boolean;
  className?: string;
  transitionDuration?: number;
  onClose?: () => void;
  onClosed?: () => void;
  children?: ReactNode;
};
