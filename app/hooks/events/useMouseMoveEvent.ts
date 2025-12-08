import { useEffect } from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent;

export type MouseEventCallback = (event: MouseOrTouchEvent) => void;

export const useMouseMoveEvent = (callback: MouseEventCallback) => {
  const handleMouseMove = (event: MouseOrTouchEvent) => {
    if (!event.isTrusted) return;
    callback(event);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [callback]);
};
