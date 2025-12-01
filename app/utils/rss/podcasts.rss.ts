import { getConfig } from '~/utils/config';
import { Track } from '~/types/gql';

import { buildRssFeed, RSSItem } from './builder.rss';
import { getPodcastRssItem } from './podcast.rss';

export const getPodcastsRssItems = async (
  podcasts: Track[],
  config = getConfig(),
): Promise<RSSItem[]> => {
  if (!config) return [];

  const items = await Promise.all(
    podcasts.map<Promise<RSSItem | null>>(async (podcast) => {
      const item = await getPodcastRssItem(podcast, config);
      if (!item) return null;
      return {
        ...item,
      };
    }),
  );

  const filteredItems = items.filter(
    (item) => item !== null && !!item?.enclosure?._attributes?.url,
  ) as RSSItem[];

  return filteredItems;
};

export const getPodcastsRssFeed = async (
  podcasts: Track[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = await getPodcastsRssItems(podcasts, config);

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
