import ListReleases from '~/components/organisms/ListReleases';
import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import PageDetailHeaderPortal from '~/components/molecules/PageDetailHeaderPortal';
import ReleasesPageHeader from '~/components/organisms/ReleasesPageHeader';

import { useReleasesQuery } from '~/hooks/queries/useReleasesQuery';

const ReleasesPage = () => {
  const { data, loading } = useReleasesQuery();

  const uid = Math.random().toString(36).substring(2, 9);

  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing releases..." />}
    >
      <PageDetailHeaderPortal>
        <ReleasesPageHeader id={uid} />
      </PageDetailHeaderPortal>
      {data?.releaseItems ? (
        <ListReleases releases={data.releaseItems} />
      ) : null}
    </HandlerContent>
  );
};

export default ReleasesPage;
