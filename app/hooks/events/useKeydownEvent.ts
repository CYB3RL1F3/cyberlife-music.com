import { useLayoutEffect } from 'react';

export const useKeydownEvent = (callback: (event: KeyboardEvent) => void) => {
  useLayoutEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      callback(event);
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callback]);
};
