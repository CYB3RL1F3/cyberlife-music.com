import type { ModalProps } from "../Modal/Modal.types";

export type ModalImageProps = Pick<ModalProps, "onClose" | "isOpen"> & {
  src: string;
  alt: string;
};
