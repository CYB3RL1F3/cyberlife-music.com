import clsx from "clsx";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export const useButtonStyle = (className?: string) => {
  const buttonClassName = useMemo(
    () =>
      twMerge(clsx(
        "transition-all text-nowrap duration-50 italic h-10 px-4 text-md py-2 px-4 text-gray-400 rounded hover:text-gray-200 leading-4 flex items-center border-none bg-gray-600 bg-opacity-80 hover:bg-opacity-90 cursor-pointer outline-none",
        className
      )),
    [className]
  );
  return buttonClassName;
};
