import { getConfig } from '~/utils/config';
import {
  cleanUrl,
  rssDateFormat,
  buildRssFeed,
  RSSItem,
  cleanText,
} from './builder.rss';
import dayjs from 'dayjs';
import { PlaylistQueryPlaylistTracks } from '~/types/gql/PlaylistQuery';

export const getPodcastRssItem = (
  podcast: PlaylistQueryPlaylistTracks,
  config = getConfig(),
): RSSItem | null => {
  if (!config) return null;

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
    enclosure: podcast.url
      ? {
          _attributes: {
            url: cleanUrl(
              `${config?.apiEndpoint}/cyberlife/playlists/${podcast.id}/stream`,
            ),
            type: 'audio/mpeg',
            length: 10000,
          },
        }
      : undefined,
    guid: `${config?.domain || ''}/rss/podcasts/${podcast.slug}.xml`,
  };
};

export const getPodcastRssFeed = (
  podcast: PlaylistQueryPlaylistTracks,
  config = getConfig(),
) => {
  if (!config) return null;

  const items = getPodcastRssItem(podcast, config);
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
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Podcasts RSS Feed',
      link: `${config?.domain}/podcasts`,
    },
  });

  return content;
};
