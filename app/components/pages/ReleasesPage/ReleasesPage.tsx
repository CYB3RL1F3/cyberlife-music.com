import ListReleases from "~/components/organisms/ListReleases";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";
import type { ReleasesPageProps } from "./ReleasesPage.types";

const ReleasesPage = ({ data, loading }: ReleasesPageProps) => {
  // const { data, loading } = useReleasesQuery();
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
