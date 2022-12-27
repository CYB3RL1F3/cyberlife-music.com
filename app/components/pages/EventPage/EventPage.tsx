import ButtonLink from "~/components/atoms/ButtonLink";
import ViewEvent from "~/components/organisms/ViewEvent";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";
import { useEventQuery } from "~/hooks/queries/useEventQuery";
import ErrorPage from "../ErrorPage";
import type { EventPageProps } from "./EventPage.types";

const EventPage = ({ id }: EventPageProps) => {
  const { data, loading } = useEventQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing event..." />}
    >
      {data?.event?.title ? (
        <ViewEvent event={data?.event} />
      ) : (
        <ErrorPage
          code={404}
          message="Gig not found"
          extra={<ButtonLink href="/events">Check out gigs</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default EventPage;
