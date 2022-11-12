import { useEffect, useState } from "react";

import { getDomElement } from "~/utils/getDomElement";

export const useDomElement = (selector: string) => {
  const [element, setElement] = useState<Element | null>(
    document.querySelector(selector)
  );
  useEffect(() => {
    const asyncEffect = async () => {
      if (element) return;
      const currentElement = await getDomElement(selector);
      setElement(currentElement);
    };
    void asyncEffect();
  }, [element, selector]);
  return element;
};
