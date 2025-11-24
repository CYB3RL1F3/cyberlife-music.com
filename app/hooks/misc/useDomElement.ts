import { useLocation } from '@remix-run/react';
import { useEffect, useState } from 'react';

import { getDomElement } from '~/utils/getDomElement';

export const useDomElement = (selector: string) => {
  const { pathname } = useLocation();
  const [element, setElement] = useState<Element | null>(
    typeof window !== 'undefined'
      ? window.document.querySelector(selector)
      : null,
  );

  useEffect(() => {
    const asyncEffect = async () => {
      const currentElement = await getDomElement(selector);
      setElement(currentElement);
    };
    void asyncEffect();

    return () => {
      setElement(null);
    };
  }, [element, selector, pathname]);

  return element;
};
