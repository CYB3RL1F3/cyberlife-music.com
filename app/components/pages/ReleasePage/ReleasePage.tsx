import type { ReleasePageProps } from "./ReleasePage.types";
import { useReleaseQuery } from "~/hooks/queries/useReleaseQuery";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import ReleaseDisplay from "~/components/organisms/ReleaseDisplay";
import ErrorPage from "../ErrorPage";
import ButtonLink from "~/components/atoms/ButtonLink";

const ReleasePage = ({ id }: ReleasePageProps) => {
  const { data, loading } = useReleaseQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader notification="Please wait while we're chasing release..." />
      }
    >
      {data?.release ? (
        <ReleaseDisplay release={data.release} />
      ) : (
        <ErrorPage
          code={404}
          message="Release not found"
          extra={<ButtonLink href="/releases">Check out releases</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default ReleasePage;
