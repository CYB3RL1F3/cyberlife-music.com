import { useEffect, useRef, useState } from "react";

const useOnScreen = <T extends Element>(rootMargin: string = "0px") => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [rootMargin]);

  return [ref, isIntersecting] as const;
};

export default useOnScreen;
