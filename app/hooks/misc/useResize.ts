import { useEffect } from "react";

export const useResize = (onResize: () => void) => {
  useEffect(() => {
    onResize();
    if (typeof window === "undefined") return;
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
    // [] ==> let only resize:event handle state update
  }, [onResize]);
};
