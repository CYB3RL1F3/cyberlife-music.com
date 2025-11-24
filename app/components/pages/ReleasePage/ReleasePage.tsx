import type { ReleasePageProps } from './ReleasePage.types';
import ButtonLink from '~/components/atoms/ButtonLink';
import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import ViewRelease from '~/components/organisms/ViewRelease';
import ErrorPage from '~/components/pages/ErrorPage';
import { useReleaseQuery } from '~/hooks/queries/useReleaseQuery';

const ReleasePage = ({ id }: ReleasePageProps) => {
  const { data, loading } = useReleaseQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing release..." />}
    >
      {data?.releaseItem ? (
        <ViewRelease release={{ ...data.releaseItem }} />
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
