import { useReleasesQuery } from "~/hooks/queries/useReleasesQuery";
import ListReleases from "~/components/organisms/ListReleases";
import HandlerContent from "~/components/molecules/HandlerContent";
import Loader from "~/components/molecules/Loader";
import PageDetailHeaderPortal from "~/components/molecules/PageDetailHeaderPortal";
import ButtonLinkBuyRelease from "~/components/organisms/ButtonLinkBuyRelease";

const ReleasesPage = () => {
  const { data, loading } = useReleasesQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing releases..." />}
    >
      <PageDetailHeaderPortal>
        <div className="flex justify-end h-16 pt-4 mr-6">
          <ButtonLinkBuyRelease />
        </div>
      </PageDetailHeaderPortal>
      {data?.releaseItems ? (
        <ListReleases releases={data.releaseItems} />
      ) : null}
    </HandlerContent>
  );
};

export default ReleasesPage;
