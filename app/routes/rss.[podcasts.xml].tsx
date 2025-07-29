import { runPlaylistQuery } from '~/queries/playlists';
import dayjs from 'dayjs';
import {
  cleanUrl,
  getField,
  rssDateFormat,
  rssGenerator,
  RSSItem,
} from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';

const getItems = async (): Promise<RSSItem[]> => {
  const podcasts = await runPlaylistQuery('dj-sets');
  const config = getConfig();

  const items: RSSItem[] = (podcasts.data.playlist.tracks || []).map(
    (podcast) => ({
      title: podcast.title || '',
      description: podcast.description || '',
      link: `${config?.domain || ''}/podcasts/${podcast.slug}`,
      pubDate: dayjs(podcast.date).format(rssDateFormat),
      category: 'Podcasts',
      author: config?.contactEmail || 'contact@cyberlife-music.com',
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
    }),
  );

  return items;
};

export const loader = async () => {
  const config = getConfig();
  const items = await getItems();

  const content = await rssGenerator({
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

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};
