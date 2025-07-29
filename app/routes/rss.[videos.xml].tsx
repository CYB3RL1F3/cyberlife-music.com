import dayjs from 'dayjs';
import { rssGenerator, RSSItem } from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';
import { runVideosQuery } from '~/queries/videos';

const getItems = async (): Promise<RSSItem[]> => {
  const videos = await runVideosQuery();
  const config = getConfig();

  const items: RSSItem[] = videos.data.videos.map((video) => ({
    title: video.title || '',
    description: video.description || '',
    link: `${config?.domain || ''}/videos/${video.slug}`,
    pubDate: dayjs().format(),
    guid: `${video._id}`,
    category: 'videos',
    author: 'Cyberlife Music',
  }));

  return items;
};

export const loader = async () => {
  const config = getConfig();
  const items = await getItems();

  const content = await rssGenerator({
    title: 'Cyberlife Music Videos RSS Feed',
    description: "Cyberlife Music's videos",
    link: `${config?.domain}/videos`,
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
