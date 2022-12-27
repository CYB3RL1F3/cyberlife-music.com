import type { ReleasePageProps } from "./ReleasePage.types";
import { useReleaseQuery } from "~/hooks/queries/useReleaseQuery";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";
import ViewRelease from "~/components/organisms/ViewRelease";
import ErrorPage from "../ErrorPage";
import ButtonLink from "~/components/atoms/ButtonLink";

const ReleasePage = ({ id }: ReleasePageProps) => {
  const { data, loading } = useReleaseQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing release..." />}
    >
      {data?.release ? (
        <ViewRelease release={data.release} />
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
