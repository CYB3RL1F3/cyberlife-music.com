import ListEvents from "~/components/organisms/ListEvents";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import { useEventsQuery } from "~/hooks/queries/useEventsQuery";

const ListEventsContainer = () => {
  const { data, loading } = useEventsQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader notification="Please wait while we're chasing events..." />
      }
    >
      <ListEvents events={data?.events} />
    </HandlerContent>
  );
};

export default ListEventsContainer;
