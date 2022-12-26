import ListEvents from "~/components/organisms/ListEvents";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";
import { useEventsQuery } from "~/hooks/queries/useEventsQuery";

const ListEventsContainer = () => {
  const { data, loading } = useEventsQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing events..." />}
    >
      <ListEvents events={data?.events} />
    </HandlerContent>
  );
};

export default ListEventsContainer;
