import { getConfig } from '~/utils/config';
import { buildRssFeed, RSSItem } from './builder.rss';
import { VideosQueryVideos } from '~/types/gql/VideosQuery';
import { getVideoRssItem } from './video.rss';

export const getVideosRssItems = (
  videos: VideosQueryVideos[],
  config = getConfig(),
): RSSItem[] => {
  if (!config) return [];

  const items: RSSItem[] = videos
    .map((video) => {
      const item = getVideoRssItem(video, config);
      if (!item) return null;
      return item;
    })
    .filter((item) => item !== null);

  return items;
};

export const getVideosRssFeed = (
  videos: VideosQueryVideos[],
  config = getConfig(),
) => {
  if (!config) return null;

  const items = getVideosRssItems(videos, config);

  const content = buildRssFeed({
    title: 'Cyberlife Music Videos RSS Feed',
    description: "Cyberlife Music's videos",
    link: `${config?.domain}/videos`,
    item: items,
    id: 'videos',
    atomLink: `${config?.domain}/rss/videos.xml`,
    contact: 'contact@cyberlife-music.com (David Cyberlife)',
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music Videos RSS Feed',
      link: `${config?.domain}/videos`,
    },
  });

  return content;
};
