import dayjs from 'dayjs';

import { buildRssFeed, rssDateFormat, RSSItem } from './builder.rss';
import { getEventsRssItems } from './events.rss';
import { getPodcastsRssItems } from './podcasts.rss';
import { getReleasesRssItems } from './releases.rss';
import { getVideosRssItems } from './videos.rss';
import { getConfig } from '~/utils/config';
import { Track, Event, ReleaseItem, Video } from '~/types/gql';

export type IndexRssItemsParams = {
  events?: Event[];
  podcasts?: Track[];
  releases?: ReleaseItem[];
  videos?: Video[];
};

export const getIndexRssItems = async (
  { events, podcasts, releases, videos }: IndexRssItemsParams,
  config = getConfig(),
) => {
  const eventsItems = getEventsRssItems(events || [], config);
  const podcastsItems = await getPodcastsRssItems(podcasts || [], config);
  const releasesItems = getReleasesRssItems(releases || [], config);
  const videosItems = getVideosRssItems(videos || [], config);

  const items: RSSItem[] = [
    ...eventsItems,
    ...podcastsItems,
    ...releasesItems,
    ...videosItems,
  ].sort((a, b) => {
    return (
      dayjs(b.pubDate, rssDateFormat).unix() -
      dayjs(a.pubDate, rssDateFormat).unix()
    );
  });

  return items;
};

export const getIndexRssFeed = async (
  params: IndexRssItemsParams,
  config = getConfig(),
) => {
  const items = await getIndexRssItems(params, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music RSS Feed',
    description: "Cyberlife Music's podcasts, releases, events, and videos",
    link: config?.domain,
    item: items,
    id: 'cyberlife-music',
    atomLink: `${config?.domain}/rss/index.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music RSS Feed',
      link: config?.domain || 'https://cyberlife-music.com',
    },
  });

  return content;
};
