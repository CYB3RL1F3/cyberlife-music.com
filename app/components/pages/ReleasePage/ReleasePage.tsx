import type { ReleasePageProps } from "./ReleasePage.types";
import { useReleaseQuery } from "~/hooks/queries/useReleaseQuery";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import ReleaseDisplay from "~/components/organisms/ReleaseDisplay";

const ReleasePage = ({ id }: ReleasePageProps) => {
  const { data, loading } = useReleaseQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader mention="Please wait while we're chasing podcasts..." />}
    >
      {data?.release && <ReleaseDisplay release={data.release} />}
    </HandlerContent>
  );
};

export default ReleasePage;
