import BackgroundImage from "~/components/atoms/BackgroundImage";
import EventMap from "~/components/molecules/EventMap";
import CarouselContainer from "../CarouselContainer";
import type { CarouselEventProps } from "./CarouselEvent.types";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const CarouselEvent = ({ event }: CarouselEventProps) => {
  const { flyer, location } = event;
  const { front } = flyer!;
  const [map, setMap] = useState<ReactNode>();
  useEffect(() => {
    setMap(location?.position ? <EventMap location={location} /> : undefined);
  }, [location]);
  return (
    <div className="flex justify-end w-full">
      <div className="w-[48rem]">
        <CarouselContainer>
          {front ? <BackgroundImage src={front} /> : null}
          {map}
        </CarouselContainer>
      </div>
    </div>
  );
};

export default CarouselEvent;
