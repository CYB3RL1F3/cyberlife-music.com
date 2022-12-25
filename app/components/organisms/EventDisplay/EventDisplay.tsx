import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import CarouselEvent from "../CarouselEvent";
import type { EventDisplayProps } from "./EventDisplay.types";
import Text from "~/components/atoms/Text";
import dayjs from "dayjs";

const EventDisplay = ({ event }: EventDisplayProps) => {
  const { title, date, time, address, cost, lineup } = event;
  return (
    <div className="o-8">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/events" />
      </PageDetailHeaderPortal>
      <CarouselEvent event={event} />
      <div className="flex justify-end w-full">
        <div className="flex justify-center gap-4 w-[48rem]">
          <div className="w-1/2 o-4">
            <Text.RightMdSemiBold>
              {date ? dayjs(date).format("DD/MM/YYYY") : ""} - {time?.begin}
            </Text.RightMdSemiBold>
            <Text.Right>{address}</Text.Right>
            <Text.Right>Price: {cost}</Text.Right>
          </div>
          <div className="w-1/2 o-4">
            <Text.MdSemiBold>Lineup:</Text.MdSemiBold>
            <div>
              {lineup?.map((artist) => (
                <Text.Semibold key={artist}>{artist}</Text.Semibold>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
