import { runPlaylistQuery } from '~/queries/playlists';
import { getConfig } from '~/utils/config';
import { getApplePodcastsRssFeed } from '~/utils/rss/apple.rss';

const getContent = async () => {
  const podcasts = await runPlaylistQuery('dj-sets');
  const config = getConfig();
  if (!podcasts.data?.playlist?.tracks) return null;
  const content = await getApplePodcastsRssFeed(
    podcasts.data.playlist.tracks,
    config,
  );
  return content;
};

export const loader = async () => {
  const content = await getContent();

  const headers = {
    'Content-Type': 'application/xml',
    'xml-version': '1.0',
    encoding: 'UTF-8',
  };

  if (!content) {
    return new Response('<error>No podcasts found</error>', {
      status: 404,
      headers,
    });
  }

  return new Response(content, {
    status: 200,
    headers,
  });
};
