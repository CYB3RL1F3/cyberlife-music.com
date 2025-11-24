import { LinksFunction } from '@remix-run/server-runtime';
import VideosPage from '~/components/pages/VideosPage';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Cyberlife Music Videos RSS Feed',
      href: '/rss/videos.xml',
    },
  ];
};

export default function VideosRoute() {
  return <VideosPage />;
}
