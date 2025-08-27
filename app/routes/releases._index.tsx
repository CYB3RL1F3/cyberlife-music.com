import { LinksFunction } from '@remix-run/server-runtime';
import ErrorPage from '~/components/pages/ErrorPage';
import ReleasesPage from '~/components/pages/ReleasesPage';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Cyberlife Music Releases RSS Feed',
      href: '/rss/releases.xml',
    },
  ];
};

export default function ReleasesRoute() {
  return <ReleasesPage />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading releases page"
    />
  );
};
