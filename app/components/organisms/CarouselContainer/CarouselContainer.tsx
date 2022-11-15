import type { CarouselContainerProps } from "./CarouselContainer.types";
import { Children, useState } from "react";
import Carousel from "~/components/atoms/Carousel";
import CarouselController from "~/components/molecules/CarouselController";

const CarouselContainer = ({ children }: CarouselContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nbItems = Children.toArray(children).length;
  return (
    <div className="flex flex-col items-end justify-end w-full h-80 o-4">
      <Carousel index={currentIndex}>{children}</Carousel>
      <CarouselController
        nbItems={nbItems}
        index={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
};

export default CarouselContainer;
