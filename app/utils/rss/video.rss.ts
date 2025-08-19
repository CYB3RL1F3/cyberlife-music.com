import { getConfig } from '~/utils/config';
import {
  cleanUrl,
  rssDateFormat,
  buildRssFeed,
  RSSItem,
  cleanText,
} from './builder.rss';
import dayjs from 'dayjs';
import { VideosQueryVideos } from '~/types/gql/VideosQuery';

export const getVideoRssItem = (
  video: VideosQueryVideos,
  config = getConfig(),
): RSSItem | null => {
  if (!config) return null;

  const item: RSSItem = {
    title: video.title || '',
    description: cleanText(video.description || ''),
    link: `${config?.domain || ''}/video/${video.slug}`,
    pubDate: dayjs().format(rssDateFormat),
    category: 'video',
    author: 'contact@cyberlife-music.com (David Cyberlife)',
    guid: `${config?.domain || ''}/rss/videos/${video.slug}.xml`,
    [`atom:link`]: {
      _attributes: {
        rel: 'alternate',
        hreflang: 'en',
        href: `${config?.domain || ''}/video/${video.slug}`,
      },
    },
    enclosure: video.illustration
      ? {
          _attributes: {
            url: cleanUrl(video.illustration),
            type: 'image/jpeg',
            length: 10000,
          },
        }
      : undefined,
  };

  return item;
};

export const getVideoRssFeed = (
  video: VideosQueryVideos,
  config = getConfig(),
) => {
  if (!config) return null;

  const item = getVideoRssItem(video, config);
  if (!item) return null;

  const content = buildRssFeed({
    title: video.title || 'Cyberlife Music Video RSS Feed',
    description: video.description || "Cyberlife Music's video",
    link: `${config?.domain}/video/${video.slug}`,
    item: [item],
    id: 'video',
    atomLink: `${config?.domain}/rss/videos/${video.slug}.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url:
        video.illustration ||
        `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: video.title || 'Cyberlife Music Video RSS Feed',
      link: `${config?.domain}/video/${video.slug}`,
    },
  });

  return content;
};
