import { useEffect } from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent;

export type MouseEventCallback = (event: MouseOrTouchEvent) => void;

export const useMouseEvent = (callback: MouseEventCallback) => {
  useEffect(() => {
    document.addEventListener('mousedown', callback);
    document.addEventListener('touchstart', callback);

    return () => {
      document.removeEventListener('mousedown', callback);
      document.removeEventListener('touchstart', callback);
    };
  }, [callback]);
};
