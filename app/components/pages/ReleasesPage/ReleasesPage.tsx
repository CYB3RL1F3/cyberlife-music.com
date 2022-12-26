import { useReleasesQuery } from "~/hooks/queries/useReleasesQuery";
import ListReleases from "~/components/organisms/ListReleases";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";

const ReleasesPage = () => {
  const { data, loading } = useReleasesQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing releases..." />}
    >
      <ListReleases releases={data?.releases} />
    </HandlerContent>
  );
};

export default ReleasesPage;
