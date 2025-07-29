import { runPlaylistQuery } from '~/queries/playlists';
import dayjs from 'dayjs';
import { rssGenerator, RSSItem } from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';

const getItems = async (): Promise<RSSItem[]> => {
  const podcasts = await runPlaylistQuery('dj-sets');
  const config = getConfig();

  const items: RSSItem[] = (podcasts.data.playlist.tracks || []).map(
    (podcast) => ({
      title: podcast.title || '',
      description: podcast.description || '',
      link: `${config?.domain || ''}/podcasts/${podcast.slug}`,
      pubDate: dayjs(podcast.date).format(),
      guid: `${podcast.id}`,
      category: 'Podcasts',
      author: 'Cyberlife Music',
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
    contact: config?.contactEmail,
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
