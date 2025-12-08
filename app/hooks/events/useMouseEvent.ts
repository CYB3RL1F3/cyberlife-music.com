import { useCallback, useEffect } from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent;

export type MouseEventCallback = (event: MouseOrTouchEvent) => void;

export const useMouseEvent = (callback: MouseEventCallback) => {
  const handleClick = useCallback(
    (event: MouseOrTouchEvent) => {
      if (!event.isTrusted) return;
      callback(event);
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [handleClick]);
};
