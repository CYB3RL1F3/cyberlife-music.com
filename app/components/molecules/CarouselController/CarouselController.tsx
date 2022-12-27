import CarouselControl from "~/components/atoms/CarouselControl";
import type { CarouselControllerProps } from "./CarouselController.types";

const CarouselController = ({
  nbItems,
  index,
  onChange,
  name
}: CarouselControllerProps) => {
  return (
    <ul className="flex justify-end h-8 gap-2">
      {Array.from({ length: nbItems }).map((_, i) => (
        <li key={`CarouselController__${i}`} className="w-8 h-8 list-none">
          <CarouselControl
            isActive={index === i}
            index={i}
            title={`carousel control ${name} button ${index}`}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default CarouselController;
