import { useEffect, useRef } from 'react';

function useDebounceEffect<Deps>(effect: () => void | (() => void), deps: Deps[], delay: number) {
  const callback = useRef(effect);

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = () => {
      if (callback.current) {
        callback.current();
      }
    };

    const timeoutId = setTimeout(handler, delay);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}

export default useDebounceEffect;
