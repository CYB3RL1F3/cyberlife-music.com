import PageDetailHeader from "~/components/molecules/PageDetailHeader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import CarouselEvent from "../CarouselEvent";
import type { ViewEventProps } from "./ViewEvent.types";
import Text from "~/components/atoms/Text";
import dayjs from "dayjs";
import Anchor from "~/components/atoms/Anchor";
import { parseHtml, toHtml } from "~/utils/html";

const ViewEvent = ({ event }: ViewEventProps) => {
  const {
    title,
    date,
    time,
    address,
    country,
    cost,
    lineup,
    description,
    links
  } = event;
  return (
    <article className="o-8">
      <PageDetailHeaderPortal>
        <PageDetailHeader title={title} url="/events" />
      </PageDetailHeaderPortal>
      <CarouselEvent event={event} />
      {description && (
        <div className="flex justify-end w-full">
          <Text.RightMd>{parseHtml(toHtml(description))}</Text.RightMd>
        </div>
      )}
      <div className="flex justify-end w-full">
        <div className="flex justify-center gap-4 w-[48rem]">
          <div className="w-1/2 o-4">
            <Text.RightMdSemiBold>
              {date ? dayjs(date).format("DD/MM/YYYY") : ""} - {time?.begin}
            </Text.RightMdSemiBold>
            <Text.Right>{address}</Text.Right>
            <Text.Right>{country}</Text.Right>
            <Text.Right>Price: {cost}</Text.Right>
            {links?.event ? (
              <>
                <p />
                <Anchor className="underline" href={links.event}>
                  <Text.RightMd>Event</Text.RightMd>
                </Anchor>
              </>
            ) : null}
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
    </article>
  );
};

export default ViewEvent;
