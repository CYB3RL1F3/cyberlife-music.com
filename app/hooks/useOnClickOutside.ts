import type { RefObject } from "react";
import { useEffect } from "react";

export type MouseOrTouchEvent = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseOrTouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseOrTouchEvent) => {
      const el = ref?.current;
      // do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler]);
};
