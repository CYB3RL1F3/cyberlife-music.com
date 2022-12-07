import { useReleasesQuery } from "~/hooks/queries/useReleasesQuery";
import ListReleases from "~/components/organisms/ListReleases";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";

const ReleasesPage = () => {
  const { data, loading } = useReleasesQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader notification="Please wait while we're chasing releases..." />
      }
    >
      <ListReleases releases={data?.releases} />
    </HandlerContent>
  );
};

export default ReleasesPage;
