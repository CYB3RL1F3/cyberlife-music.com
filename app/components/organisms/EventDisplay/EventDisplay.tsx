import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import CarouselEvent from "../CarouselEvent";
import type { EventDisplayProps } from "./EventDisplay.types";

const EventDisplay = ({ event }: EventDisplayProps) => {
  return (
    <div className="o-8">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={event.title} url="/gigs" />
      </PageDetailHeaderPortal>
      <CarouselEvent event={event} />
    </div>
  );
};

export default EventDisplay;
