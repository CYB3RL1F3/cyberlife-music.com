import clsx from 'clsx';
import { forwardRef, useImperativeHandle } from 'react';

import Overlay from '~/components/atoms/Overlay';
import ModalPortal from '~/components/molecules/ModalPortal';

import type { ModalWrapperProps, OnCloseRefType } from './ModalWrapper.types';

const ModalWrapper = forwardRef<OnCloseRefType, ModalWrapperProps>(
  (
    {
      children,
      isOpen,
      onClose,
      className,
      transitionDuration = 250,
      portal = ModalPortal,
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      close,
    }));

    const Portal = portal;

    return (
      <Portal>
        <Overlay
          fullscreen
          isOpen={isOpen}
          onClose={onClose}
          className={className}
          transitionDuration={transitionDuration}
          containerClassName={clsx(
            `flex desktop:items-center justify-center w-full h-full max-h-full transition-transform transform-gpu duration-${transitionDuration} ease-in-out desktop:py-6 pointer-events-none`,
            {
              'translate-y-0': isOpen,
              'translate-y-full': !isOpen,
            },
          )}
        >
          <div className="flex items-center justify-center w-full h-full">
            {children}
          </div>
        </Overlay>
      </Portal>
    );
  },
);

ModalWrapper.displayName = 'Modal';

export default ModalWrapper;
