import { useEffect, useRef } from 'react';

type CancelableFn = (() => void) & { cancel?: () => void };

export const useResize = (onResize: CancelableFn) => {
  const handlerRef = useRef(onResize);
  useEffect(() => {
    handlerRef.current = onResize;
  }, [onResize]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handle = () => handlerRef.current();

    window.addEventListener('resize', handle, { passive: true });
    return () => {
      window.removeEventListener('resize', handle);
      handlerRef.current.cancel?.();
    };
  }, []);
};
