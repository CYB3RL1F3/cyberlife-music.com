import type { RefObject } from 'react';
import { useCallback } from 'react';

import { useMouseEvent } from '~/hooks/events/useMouseEvent';

export type MouseOrTouchEvent = MouseEvent | TouchEvent;

export const useOutsideMouseClickEvent = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseOrTouchEvent) => void,
) => {
  const listener = useCallback(
    (event: MouseOrTouchEvent) => {
      const el = ref?.current;
      // do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    },
    [ref, handler],
  );
  useMouseEvent(listener);
};
