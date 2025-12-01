import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import BackgroundImage from '~/components/atoms/BackgroundImage';
import EventMap from '~/components/molecules/EventMap';
import type { CarouselContainerProps } from '~/components/organisms/CarouselContainer';
import CarouselContainer from '~/components/organisms/CarouselContainer';

import type { CarouselEventProps } from './CarouselEvent.types';

const CarouselEvent = ({ event }: CarouselEventProps) => {
  const { flyer, location, title } = event;
  const { front } = flyer!;
  const [map, setMap] = useState<ReactNode>();
  useEffect(() => {
    setMap(location?.position ? <EventMap location={location} /> : undefined);
  }, [location]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDrag: CarouselContainerProps['onDrag'] = (e, i) => {
    const delta = i.offset.x > 0 ? -1 : 1;
    if (currentIndex + delta < 0 || currentIndex + delta > 1) return;
    setCurrentIndex((index) => index + delta);
  };

  return (
    <div className="flex justify-end w-full">
      <div className="w-[48rem]">
        <CarouselContainer
          onChange={setCurrentIndex}
          index={currentIndex}
          canDrag={currentIndex === 0}
          onDrag={handleDrag}
          name={`event ${title}`}
        >
          {front ? (
            <BackgroundImage
              className="w-full h-[85%] bg-right bg-no-repeat"
              backgroundType="bg-contain"
              src={front}
            />
          ) : null}
          {map}
        </CarouselContainer>
      </div>
    </div>
  );
};

export default CarouselEvent;
