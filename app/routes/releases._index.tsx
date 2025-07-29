import { LinksFunction } from '@remix-run/server-runtime';
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
