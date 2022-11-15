import ButtonLink from "~/components/atoms/ButtonLink";
import EventDisplay from "~/components/organisms/EventDisplay";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import { useEventQuery } from "~/hooks/queries/useEventQuery";
import ErrorPage from "../ErrorPage";
import type { EventPageProps } from "./EventPage.types";

const EventPage = ({ id }: EventPageProps) => {
  const { data, loading } = useEventQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader mention="Please wait while we're chasing event..." />}
    >
      {data?.event ? (
        <EventDisplay event={data?.event} />
      ) : (
        <ErrorPage
          code={404}
          message="Gig not found"
          extra={<ButtonLink href="/gigs">Check out gigs</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default EventPage;
