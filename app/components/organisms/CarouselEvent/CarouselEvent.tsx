import BackgroundImage from "~/components/atoms/BackgroundImage";
import EventMap from "~/components/molecules/EventMap";
import CarouselContainer from "../CarouselContainer";
import type { CarouselEventProps } from "./CarouselEvent.types";

const CarouselEvent = ({ event }: CarouselEventProps) => {
  const { flyer, location } = event;
  const { front } = flyer!;
  return (
    <div className="flex justify-end w-full">
      <div className="w-[48rem]">
        <CarouselContainer>
          {front ? <BackgroundImage src={front} /> : null}
          {location?.position ? <EventMap location={location} /> : null}
        </CarouselContainer>
      </div>
    </div>
  );
};

export default CarouselEvent;
