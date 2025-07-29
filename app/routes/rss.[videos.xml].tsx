import dayjs from 'dayjs';
import {
  cleanUrl,
  getField,
  rssDateFormat,
  rssGenerator,
  RSSItem,
} from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';
import { runVideosQuery } from '~/queries/videos';

const getItems = async (): Promise<RSSItem[]> => {
  const videos = await runVideosQuery();
  const config = getConfig();

  const items: RSSItem[] = videos.data.videos.map((video) => ({
    title: video.title || '',
    description: video.description || '',
    link: `${config?.domain || ''}/videos/${video.slug}`,
    pubDate: dayjs().format(rssDateFormat),
    category: 'videos',
    author: config?.contactEmail || 'contact@cyberlife-music.com',
    enclosure: video.illustration
      ? {
          _attributes: {
            url: cleanUrl(video.illustration),
            type: 'image/jpeg',
            length: 10000,
          },
        }
      : undefined,
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
    id: 'videos',
    atomLink: `${config?.domain}/rss/videos.xml`,
    contact: config?.contactEmail,
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Videos RSS Feed',
      link: `${config?.domain}/videos`,
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
