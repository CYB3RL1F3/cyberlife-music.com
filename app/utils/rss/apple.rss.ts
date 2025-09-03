import { getConfig } from '~/utils/config';
import { buildRssFeed, RSSItem } from './builder.rss';

import { PlaylistQueryPlaylistTracks } from '~/types/gql/PlaylistQuery';
import { getPodcastRssItem } from './podcast.rss';

export const getApplePodcastsRssItems = async (
  podcasts: PlaylistQueryPlaylistTracks[],
  config = getConfig(),
): Promise<RSSItem[]> => {
  if (!config) return [];

  const items = await Promise.all(
    podcasts.map<Promise<RSSItem | null>>(async (podcast) => {
      const item = await getPodcastRssItem(podcast, config);
      if (!item) return null;
      return {
        ...item,
        ['itunes:explicit']: false,
        ['itunes:image']: {
          _attributes: {
            href:
              podcast.artwork ||
              'https://cdn.cyberlife-music.com/images/cyberlife-podcast-artwork.jpg',
          },
        },
      };
    }),
  );

  const filteredItems = items.filter(
    (item) => item !== null && !!item?.enclosure?._attributes?.url,
  ) as RSSItem[];

  return filteredItems;
};

export const getApplePodcastsRssFeed = async (
  podcasts: PlaylistQueryPlaylistTracks[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = await getApplePodcastsRssItems(podcasts, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music',
    description: "Cyberlife Music's podcasts",
    link: `${config?.domain || ''}/podcasts`,
    item: items,
    id: 'podcasts',
    atomLink: `${config?.domain}/rss/podcasts-itunes.xml`,
    contact: config?.contactEmail,
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-podcast-artwork.jpg`,
      title: 'Cyberlife Music Podcasts RSS Feed',
      link: `${config?.domain}/podcasts`,
    },
    attributes: {
      ['xmlns:itunes']: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
    },
    extra: {
      ['itunes:author']: 'Cyberlife Music',
      ['itunes:owner']: {
        ['itunes:name']: 'Cyberlife Music',
        ['itunes:email']: config?.contactEmail,
      },
      ['itunes:explicit']: false,
      ['itunes:image']: {
        _attributes: {
          href: 'https://cdn.cyberlife-music.com/images/cyberlife-podcast-artwork.jpg',
        },
      },
      ['itunes:category']: {
        _attributes: {
          text: 'Music',
        },
      },
    },
  });

  return content;
};
