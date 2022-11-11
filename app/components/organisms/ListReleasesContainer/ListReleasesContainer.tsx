import { useReleasesQuery } from "~/hooks/queries/useReleasesQuery";
import ListReleases from "../ListReleases";
import HandlerContent from "../HandlerContent";
import Loader from "../Loader";

const ListReleasesContainer = () => {
  const { data, loading } = useReleasesQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader mention="Please wait while we're chasing releases..." />}
    >
      <ListReleases releases={data?.releases} />
    </HandlerContent>
  );
};

export default ListReleasesContainer;
