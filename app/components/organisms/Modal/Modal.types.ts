import type { ReactNode } from "react";
import { ModalWrapperProps } from "../ModalWrapper";

export type OnCloseRefType = {
  close: () => void;
};

export type ModalProps = ModalWrapperProps & {
  bottom?: ReactNode;
  className?: string;
  maxWidth?: string | number;
  height?: string | number;
};
