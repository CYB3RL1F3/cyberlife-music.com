import { useEffect, useRef } from 'react';

type Cleanup = void | (() => void);

export default function useDebounceEffect<T extends ReadonlyArray<unknown>>(
  effect: () => Cleanup,
  deps: T,
  delay: number,
) {
  const callbackRef = useRef(effect);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = effect;
  }, [effect]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }

      const maybeCleanup = callbackRef.current?.();
      if (typeof maybeCleanup === 'function') {
        cleanupRef.current = maybeCleanup;
      }
    }, delay);

    return () => {
      clearTimeout(id);
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
    };
  }, [...deps, delay]);
}
