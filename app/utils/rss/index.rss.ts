import dayjs from 'dayjs';
import { buildRssFeed, rssDateFormat, RSSItem } from './builder.rss';
import { getEventsRssItems } from './events.rss';
import { getPodcastsRssItems } from './podcasts.rss';
import { getReleasesRssItems } from './releases.rss';
import { getVideosRssItems } from './videos.rss';
import { EventsQueryEvents } from '~/types/gql/EventsQuery';
import { PlaylistQueryPlaylistTracks } from '~/types/gql/PlaylistQuery';
import { ReleasesQueryReleaseItems } from '~/types/gql/ReleasesQuery';
import { VideosQueryVideos } from '~/types/gql/VideosQuery';
import { getConfig } from '~/utils/config';

export type IndexRssItemsParams = {
  events?: EventsQueryEvents[];
  podcasts?: PlaylistQueryPlaylistTracks[];
  releases?: ReleasesQueryReleaseItems[];
  videos?: VideosQueryVideos[];
};

export const getIndexRssItems = (
  { events, podcasts, releases, videos }: IndexRssItemsParams,
  config = getConfig(),
) => {
  const eventsItems = getEventsRssItems(events || [], config);
  const podcastsItems = getPodcastsRssItems(podcasts || [], config);
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

export const getIndexRssFeed = (
  params: IndexRssItemsParams,
  config = getConfig(),
) => {
  const items = getIndexRssItems(params, config);

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
