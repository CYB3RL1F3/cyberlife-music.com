import { EventsQueryEvents } from '~/types/gql/EventsQuery';
import { getConfig } from '~/utils/config';
import {
  cleanUrl,
  rssDateFormat,
  buildRssFeed,
  RSSItem,
  cleanText,
} from './builder.rss';
import dayjs from 'dayjs';
import { isBeforeDate } from '../events';

export const getEventRssItem = (
  event: EventsQueryEvents,
  config = getConfig(),
): RSSItem | null => {
  if (!config) return null;

  const pubDate = dayjs(event.date)
    .subtract(Math.max(dayjs(event.date).diff(dayjs(), 'day'), 0) + 30, 'day')
    .format(rssDateFormat);

  return {
    title: cleanText(event.title || ''),
    description: cleanText(event.description || ''),
    link: `${config?.domain}/events/${event.slug}`,
    [`atom:link`]: {
      _attributes: {
        rel: 'alternate',
        hreflang: 'en',
        href: `${config?.domain}/events/${event.slug}`,
      },
    },
    pubDate,
    category: 'Events',
    author: 'contact@cyberlife-music.com (David Cyberlife)',
    guid: `${config?.domain}/rss/events/${event.slug}.xml`,
    enclosure: event.flyer?.front
      ? {
          _attributes: {
            url: cleanUrl(event.flyer.front),
            type: 'image/jpeg',
            length: 10000,
          },
        }
      : undefined,
  };
};

export const getEventRssFeed = (
  event: EventsQueryEvents,
  config = getConfig(),
) => {
  if (!config) return null;

  const item = getEventRssItem(event, config);
  if (!item?.title) return null;

  const content = buildRssFeed({
    title: item.title,
    description: item.description || "Cyberlife Music's Events",
    link: `${config?.domain}/event/${event.slug}`,
    item: [item],
    id: 'events',
    atomLink: `${config?.domain}/rss/events/${event.slug}.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url:
        event.flyer?.front ||
        `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: item.title,
      link: `${config?.domain}/events/${event.slug}`,
    },
  });

  return content;
};
