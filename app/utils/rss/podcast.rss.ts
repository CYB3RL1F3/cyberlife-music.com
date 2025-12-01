import dayjs from 'dayjs';

import { getConfig } from '~/utils/config';
import {
  cleanUrl,
  rssDateFormat,
  buildRssFeed,
  RSSItem,
  cleanText,
} from './builder.rss';
import { Track } from '~/types/gql';

export const getFileSize = async (url: string): Promise<number> => {
  const response = await fetch(url, {
    method: 'HEAD',
    redirect: 'follow',
  });
  if (!response.ok) return 0;
  const contentLength = response.headers.get('Content-Length');
  return contentLength ? parseInt(contentLength, 10) : 0;
};

export const getPodcastRssItem = async (
  podcast: Track,
  config = getConfig(),
): Promise<RSSItem | null> => {
  if (!config) return null;

  const length = await getFileSize(
    `${config?.apiEndpoint}/cyberlife/playlists/${podcast.id}/stream`,
  );

  if (!length || !podcast.url) return null;

  return {
    title: podcast.title || '',
    description: cleanText(podcast.description || ''),
    link: `${config?.domain || ''}/podcasts/${podcast.slug}`,
    pubDate: podcast.date
      ? dayjs(podcast.date).format(rssDateFormat)
      : dayjs().format(rssDateFormat),
    category: 'Podcasts',
    author: 'contact@cyberlife-music.com (David Cyberlife)',
    [`atom:link`]: {
      _attributes: {
        rel: 'alternate',
        hreflang: 'en',
        href: `${config?.domain || ''}/podcasts/${podcast.slug}`,
      },
    },
    enclosure: {
      _attributes: {
        url: cleanUrl(
          `${config?.apiEndpoint}/cyberlife/playlists/${podcast.id}/stream`,
        ),
        type: 'audio/mpeg',
        length,
      },
    },
    guid: `${config?.domain || ''}/rss/podcasts/${podcast.slug}.xml`,
  };
};

export const getPodcastRssFeed = async (
  podcast: Track,
  config = getConfig(),
) => {
  if (!config) return null;

  const items = await getPodcastRssItem(podcast, config);
  if (!items) return null;

  const content = buildRssFeed({
    title: podcast.title || 'Cyberlife Music Podcast',
    description: podcast.description || "Cyberlife Music's podcast",
    link: `${config?.domain || ''}/podcasts/${podcast.slug}`,
    item: [items],
    id: 'podcasts',
    atomLink: `${config?.domain}/rss/podcasts/${podcast.slug}.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-podcast-artwork.jpg`,
      title: 'Cyberlife Music Podcasts RSS Feed',
      link: `${config?.domain}/podcasts`,
    },
  });

  return content;
};
