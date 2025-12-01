import { getConfig } from '~/utils/config';
import { ReleaseItem } from '~/types/gql';

import { buildRssFeed, RSSItem } from './builder.rss';
import { getReleaseRssItem } from './release.rss';

export const getReleasesRssItems = (
  releases: ReleaseItem[],
  config = getConfig(),
): RSSItem[] => {
  if (!config) return [];

  const items = releases
    .map((release) => {
      const item = getReleaseRssItem(release, config);
      if (!item) return null;
      return item;
    })
    .filter((item) => item !== null);

  return items;
};

export const getReleasesRssFeed = (
  releases: ReleaseItem[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = getReleasesRssItems(releases, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music Releases RSS Feed',
    description: "Cyberlife Music's releases",
    link: `${config?.domain}/releases`,
    item: items,
    id: 'releases',
    atomLink: `${config?.domain}/rss/releases.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Releases RSS Feed',
      link: `${config?.domain}/releases`,
    },
  });

  return content;
};
