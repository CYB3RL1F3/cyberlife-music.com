import type { LinksFunction, LoaderFunction } from '@remix-run/server-runtime';
import PodcastsPage from '~/components/pages/PodcastsPage';
import { runPlaylistQuery } from '~/queries/playlists';

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

export const loader: LoaderFunction = async ({ request }) => {
  const { data, error } = await runPlaylistQuery('dj-sets');
  if (!data || error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
  const { playlist } = data;
  return {
    playlist,
  };
};

export default function PodcastRoute() {
  return <PodcastsPage />;
}
