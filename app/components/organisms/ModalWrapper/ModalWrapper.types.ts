import type { OverlayProps } from "~/components/atoms/Overlay";
import type { ReactNode } from "react";
import type ModalPortal from "~/components/molecules/ModalPortal";

export type OnCloseRefType = {
  close: () => void;
};

type PortalComponent = typeof ModalPortal;

export type ModalWrapperProps = {
  children: ReactNode;
  className?: string;
  transitionDuration?: number;
  isOpen?: OverlayProps["isOpen"];
  onClose?: () => void;
  portal?: PortalComponent;
};
