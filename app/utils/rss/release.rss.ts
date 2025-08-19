import { getConfig } from '~/utils/config';
import { cleanUrl, rssDateFormat, buildRssFeed, RSSItem } from './builder.rss';
import dayjs from 'dayjs';
import { ReleasesQueryReleaseItems } from '~/types/gql/ReleasesQuery';

export const getReleaseRssItem = (
  release: ReleasesQueryReleaseItems,
  config = getConfig(),
): RSSItem | null => {
  if (!config) return null;

  return {
    title: release.release?.title || '',
    description: release.release?.title || '',
    link: cleanUrl(`${config?.domain || ''}/releases/${release.release?.slug}`),
    pubDate: dayjs(release.release?.releaseDate).format(rssDateFormat),
    category: 'Releases',
    author: 'contact@cyberlife-music.com (David Cyberlife)',
    guid: `${config?.domain || ''}/rss/releases/${release.release?.slug}.xml`,
    [`atom:link`]: {
      _attributes: {
        rel: 'alternate',
        hreflang: 'en',
        href: cleanUrl(
          `${config?.domain || ''}/releases/${release.release?.slug}`,
        ),
      },
    },
    enclosure: release.release?.thumb
      ? {
          _attributes: {
            url: cleanUrl(release.release.thumb),
            type: 'image/jpeg',
            length: 10000,
          },
        }
      : undefined,
  };
};

export const getReleasesRssFeed = (
  release: ReleasesQueryReleaseItems,
  config = getConfig(),
) => {
  if (!config) return null;

  const item = getReleaseRssItem(release, config);
  if (!item) return null;

  const content = buildRssFeed({
    title:
      release.release?.title ||
      release.name ||
      'Cyberlife Music Release RSS Feed',
    description: release.release?.title || "Cyberlife Music's releases",
    link: `${config?.domain}/releases`,
    item: [item],
    id: 'releases',
    atomLink: `${config?.domain}/rss/releases.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url:
        release.release?.thumb ||
        `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title:
        release.release?.title ||
        release.name ||
        'Cyberlife Music Release RSS Feed',
      link: `${config?.domain}/releases/${release.release?.slug || ''}`,
    },
  });

  return content;
};
