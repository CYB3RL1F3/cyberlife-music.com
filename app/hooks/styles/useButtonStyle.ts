import clsx from "clsx";
import { useMemo } from "react";

export const useButtonStyle = (className?: string) => {
  const buttonClassName = useMemo(
    () =>
      clsx(
        "transition-all duration-50 italic h-12 px-4 text-md p-2 text-gray-400 rounded hover:text-gray-200 leading-4 flex items-center border-none bg-gray-600 bg-opacity-80 hover:bg-opacity-90 cursor-pointer outline-none",
        className
      ),
    [className]
  );
  return buttonClassName;
};
