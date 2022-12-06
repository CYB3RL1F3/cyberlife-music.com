import { useCallback, useMemo, useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";
import { useModalOpen } from "~/hooks/useModalOpen";
import clsx from "clsx";
import type { OverlayProps } from "./Overlay.types";

const Overlay = ({
  children,
  className,
  containerClassName,
  isOpen = false,
  transitionDuration = 250,
  onClose
}: OverlayProps) => {
  useModalOpen();

  const containerRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
    } else {
      setTimeout(() => {
        setDisplay(false);
      }, transitionDuration);
    }
  }, [isOpen, transitionDuration]);

  const finalClassName = useMemo(
    () =>
      clsx(
        `top-0 fixed z-40 backdrop-blur-sm block z-overlay h-full l-0 transition-colors duration-${transitionDuration} ease-in-out w-full`,
        className
      ),
    [transitionDuration, className]
  );

  const onClickOutside = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useOnClickOutside(containerRef, onClickOutside);

  if (!display) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={finalClassName}
      aria-hidden
    >
      <div
        className={`top-0 fixed opacity-80 h-full l-0 transition-colors duration-${transitionDuration} ease-in-out w-full bg-gray-700`}
      />
      <div ref={containerRef} className={containerClassName}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
