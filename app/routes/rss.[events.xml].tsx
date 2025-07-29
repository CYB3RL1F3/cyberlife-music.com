import { runEventsQuery } from '~/queries/events';
import dayjs from 'dayjs';
import { rssDateFormat, rssGenerator, RSSItem } from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';

const getItems = async (): Promise<RSSItem[]> => {
  const config = getConfig();
  const events = await runEventsQuery();

  const items: RSSItem[] = events.data.events.map((event) => ({
    title: event.title || '',
    description: event.description || '',
    link: `${config?.domain}/events/${event.slug}`,
    pubDate: dayjs(event.date).format(rssDateFormat),
    guid: `${event._id}`,
    category: 'Events',
    author: config?.contactEmail || 'contact@cyberlife-music.com',
    enclosure: event.flyer?.front
      ? {
          url: event.flyer.front,
          type: 'image/jpeg',
          length: 10000,
        }
      : undefined,
  }));

  return items;
};

export const loader = async () => {
  const config = getConfig();
  const items = await getItems();

  const content = await rssGenerator({
    title: 'Cyberlife Music Events RSS Feed',
    description: "Cyberlife Music's Events",
    link: `${config?.domain}/events`,
    item: items,
    id: 'events',
    atomLink: `${config?.domain}/rss/events.xml`,
    contact: config?.contactEmail,
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music',
      link: `${config?.domain}/events`,
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
