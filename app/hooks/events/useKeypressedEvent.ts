import { useCallback } from 'react';

import { useKeydownEvent } from '~/hooks/events/useKeydownEvent';

export const useKeypressedEvent = (
  key: string | string[],
  callback: () => void,
) => {
  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      const isKeypressed = Array.isArray(key)
        ? key.includes(event.key)
        : event.key === key;

      if (isKeypressed) {
        callback();
      }
    },
    [key, callback],
  );

  return useKeydownEvent(handleKeydown);
};
