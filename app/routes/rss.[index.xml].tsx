import { runEventsQuery } from '~/queries/events';
import { runPlaylistQuery } from '~/queries/playlists';
import { runReleasesQuery } from '~/queries/releases';
import { runVideosQuery } from '~/queries/videos';
import { getConfig } from '~/utils/config';
import { getIndexRssFeed } from '~/utils/rss/index.rss';

const getContent = async () => {
  const config = getConfig();
  const [events, podcasts, releases, videos] = await Promise.all([
    runEventsQuery(),
    runPlaylistQuery('dj-sets'),
    runReleasesQuery(),
    runVideosQuery(),
  ]);

  const content = getIndexRssFeed(
    {
      events: events.data.events || [],
      podcasts: podcasts.data.playlist.tracks || [],
      releases: releases.data.releaseItems || [],
      videos: videos.data.videos || [],
    },
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
