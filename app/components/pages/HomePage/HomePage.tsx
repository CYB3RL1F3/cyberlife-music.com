import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import Summary from '~/components/organisms/Summary';
import ErrorPage from '../ErrorPage';
import ButtonLink from '~/components/atoms/ButtonLink';
import { useSummaryQuery } from '~/hooks/queries/useSummaryQuery';
import { getConfig } from '~/utils/config';

const HomePage = () => {
  const { data, loading } = useSummaryQuery({
    playlist: 'dj-sets',
    topPodcastId: 'minuteuf-20',
    webshopId: getConfig()?.webshopId!,
    expectedNbReleases: 2,
  });

  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing content..." />}
    >
      {data?.summary ? (
        <Summary {...data?.summary} />
      ) : (
        <ErrorPage
          code={500}
          message="Impossible to load content"
          extra={<ButtonLink href="/">Reload</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default HomePage;
