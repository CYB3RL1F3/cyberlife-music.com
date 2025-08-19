import { EventsQueryEvents } from '~/types/gql/EventsQuery';
import { getConfig } from '~/utils/config';
import { buildRssFeed, RSSItem } from './builder.rss';
import { getEventRssItem } from './event.rss';

export const getEventsRssItems = (
  events: EventsQueryEvents[],
  config = getConfig(),
): RSSItem[] => {
  if (!config) return [];

  const items = events
    .map((event) => {
      const item = getEventRssItem(event, config);
      if (!item) return null;
      return item;
    })
    .filter((item) => item !== null);

  return items;
};

export const getEventsRssFeed = (
  events: EventsQueryEvents[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = getEventsRssItems(events, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music Events RSS Feed',
    description: "Cyberlife Music's Events",
    link: `${config?.domain}/events`,
    item: items,
    id: 'events',
    atomLink: `${config?.domain}/rss/events.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Events RSS Feed',
      link: `${config?.domain}/events`,
    },
  });
  return content;
};
