import { LinksFunction } from '@remix-run/server-runtime';
import PodcastsPage from '~/components/pages/PodcastsPage';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Cyberlife Music Podcasts RSS Feed',
      href: '/rss/podcasts.xml',
    },
  ];
};

export default function IndexRoute() {
  return <PodcastsPage />;
}
