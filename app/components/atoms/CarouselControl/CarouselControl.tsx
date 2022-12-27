import type { CarouselControlProps } from "./CarouselControl.types";
import type { MouseEventHandler } from "react";
import { clsx } from "clsx";

const CarouselControl = ({
  index,
  isActive,
  onChange,
  title = `carousel button ${index}`
}: CarouselControlProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onChange?.(index);
  };

  const className = clsx({
    "w-8 h-8 rounded-full bg-gray-500 cursor-pointer transition-all duration-150":
      true,
    "bg-opacity-50": !isActive
  });
  return <button title={title} onClick={handleClick} className={className} />;
};

export default CarouselControl;
