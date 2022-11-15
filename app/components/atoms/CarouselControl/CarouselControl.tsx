import type { CarouselControlProps } from "./CarouselControl.types";
import { useCallback } from "react";
import { clsx } from "clsx";

const CarouselControl = ({
  index,
  isActive,
  onChange
}: CarouselControlProps) => {
  const handleChange = useCallback(() => onChange?.(index), [onChange, index]);

  const className = clsx({
    "w-8 h-8 rounded-full bg-gray-500 cursor-pointer transition-all duration-150":
      true,
    "bg-opacity-50": !isActive
  });
  return <button onClick={handleChange} className={className} />;
};

export default CarouselControl;
