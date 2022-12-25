import type { CarouselContainerProps } from "./CarouselContainer.types";
import { Children } from "react";
import Carousel from "~/components/atoms/Carousel";
import CarouselController from "~/components/molecules/CarouselController";
import ClientOnly from "~/components/atoms/ClientOnly";

const CarouselContainer = ({
  children,
  name,
  onChange,
  index = 0,
  canDrag = true,
  onDrag
}: CarouselContainerProps) => {
  const nbItems = Children.toArray(children).length;

  return (
    <ClientOnly>
      {() => (
        <div className="flex flex-col items-end justify-end w-full h-80 o-4">
          <Carousel
            onDrag={onDrag}
            canDrag={canDrag}
            nbItems={nbItems}
            index={index}
          >
            {children}
          </Carousel>
          <CarouselController
            nbItems={nbItems}
            index={index}
            name={name}
            onChange={onChange}
          />
        </div>
      )}
    </ClientOnly>
  );
};

export default CarouselContainer;
