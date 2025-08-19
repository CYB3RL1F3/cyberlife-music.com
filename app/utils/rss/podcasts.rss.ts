import { getConfig } from '~/utils/config';
import { buildRssFeed, RSSItem } from './builder.rss';

import { PlaylistQueryPlaylistTracks } from '~/types/gql/PlaylistQuery';
import { getPodcastRssItem } from './podcast.rss';

export const getPodcastsRssItems = (
  podcasts: PlaylistQueryPlaylistTracks[],
  config = getConfig(),
): RSSItem[] => {
  if (!config) return [];

  const items = podcasts
    .map((podcast) => {
      return getPodcastRssItem(podcast, config);
    })
    .filter((item) => item !== null);

  return items;
};

export const getPodcastsRssFeed = (
  podcasts: PlaylistQueryPlaylistTracks[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = getPodcastsRssItems(podcasts, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music Podcasts RSS Feed',
    description: "Cyberlife Music's podcasts",
    link: `${config?.domain || ''}/podcasts`,
    item: items,
    id: 'podcasts',
    atomLink: `${config?.domain}/rss/podcasts.xml`,
    contact: config?.contactEmail,
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Podcasts RSS Feed',
      link: `${config?.domain}/podcasts`,
    },
  });

  return content;
};
