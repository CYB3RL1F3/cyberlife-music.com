import { LoaderFunction } from '@remix-run/server-runtime';
import ErrorPage from '~/components/pages/ErrorPage';
import HomePage from '~/components/pages/HomePage';
import { runSummaryQuery } from '~/queries/summary';
import { getConfig } from '~/utils/config';

export const loader: LoaderFunction = async ({ request }) => {
  const webshopId = getConfig()?.webshopId;
  if (!webshopId) {
    throw new Response('Missing configuration', {
      status: 500,
    });
  }

  const { data, error } = await runSummaryQuery({
    playlist: 'dj-sets',
    topPodcastId: 'minuteuf-20',
    webshopId,
    expectedNbReleases: 2,
  });

  if (!data?.summary || error) {
    throw new Response(
      'A technical error occurred while trying to load informations',
      {
        status: 500,
      },
    );
  }

  const { summary } = data;

  return {
    summary,
  };
};

export default function IndexRoute() {
  return <HomePage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading this website"
    />
  );
};
