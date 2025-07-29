import { sitemapGenerator } from '~/utils/sitemap-generator';
import type { Path } from '~/utils/sitemap-generator';
import { runEventsQuery } from '~/queries/events';
import { runPlaylistQuery } from '~/queries/playlists';
import { runReleasesQuery } from '~/queries/releases';
import dayjs from 'dayjs';
import { rssGenerator, RSSItem } from '~/utils/rss-generator';
import { runVideosQuery } from '~/queries/videos';
import { getConfig } from '~/utils/config';

const getItems = async (): Promise<RSSItem[]> => {
  const config = getConfig();
  const [events, podcasts, releases, videos] = await Promise.all([
    runEventsQuery(),
    runPlaylistQuery('dj-sets'),
    runReleasesQuery(),
    runVideosQuery(),
  ]);

  const items: RSSItem[] = [
    ...events.data.events.map((event) => ({
      title: event.title || '',
      description: event.description || '',
      link: `${config?.domain || ''}/events/${event.slug}`,
      pubDate: dayjs(event.date).format(),
      guid: `${event._id}`,
      category: 'Events',
      author: 'Cyberlife Music',
    })),
    ...(podcasts.data.playlist.tracks || []).map((podcast) => ({
      title: podcast.title || '',
      description: podcast.description || '',
      link: `${config?.domain || ''}/podcasts/${podcast.slug}`,
      pubDate: dayjs(podcast.date).format(),
      guid: `${podcast.id}`,
      category: 'Podcasts',
      author: 'Cyberlife Music',
    })),
    ...(releases.data.releaseItems || []).map((release) => ({
      title: release.release?.title || '',
      description: release.release?.bandcamp || '',
      link: `${config?.domain || ''}/releases/${release.release?.slug}`,
      pubDate: dayjs(release.release?.releaseDate).format(),
      guid: `${release.id}`,
      category: 'Releases',
      author: 'Cyberlife Music',
    })),
    ...(videos.data.videos || []).map((video) => ({
      title: video.title || '',
      description: video.description || '',
      link: `${config?.domain || ''}/videos/${video.slug}`,
      pubDate: dayjs().format(),
      guid: `${video._id}`,
      category: 'Videos',
      author: 'Cyberlife Music',
    })),
  ];

  return items;
};

export const loader = async () => {
  const config = getConfig();
  const items = await getItems();

  const content = await rssGenerator({
    title: 'Cyberlife Music RSS Feed',
    description: "Cyberlife Music's podcasts, releases, events, and videos",
    link: config?.domain,
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
