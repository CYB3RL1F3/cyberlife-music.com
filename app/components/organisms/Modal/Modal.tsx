import clsx from "clsx";
import { forwardRef, useImperativeHandle } from "react";

import type { ModalProps, OnCloseRefType } from "./Modal.types";
import { IoMdClose } from "react-icons/io";
import ModalPortal from "~/components/molecules/ModalPortal";
import Icon from "~/components/atoms/Icon";
import ModalWrapper from "~/components/organisms/ModalWrapper/ModalWrapper";

const Modal = forwardRef<OnCloseRefType, ModalProps>(
  (
    {
      children,
      isOpen,
      onClose,
      className,
      maxWidth = "max-w-[80vw]",
      transitionDuration = 250,
      height = "h-fit",
      portal = ModalPortal
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      close
    }));

    return (
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        className={className}
        transitionDuration={transitionDuration}
        portal={portal}
      >
        <div
          className={clsx(
            `flex flex-col w-fit bg-black rounded-3xl desktop:rounded-3xl overflow-hidden pointer-events-auto`,
            maxWidth
          )}
          style={{
            height
          }}
          aria-hidden
        >
          <div className="relative">
            <button
              title="close modal"
              className="absolute mt-4 z-100 top-1/2 focus:outline-none right-6"
              onClick={onClose}
            >
              <Icon
                className="text-gray-400 hover:text-gray-200"
                size={48}
                icon={<IoMdClose />}
              />
            </button>
          </div>
          <div
            className={clsx(
              "flex-1 bg-black flex justify-center items-center overflow-auto w-fit h-fit max-h-[90vh] max-w-[80vw]",
              maxWidth
            )}
          >
            {children}
          </div>
        </div>
      </ModalWrapper>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
