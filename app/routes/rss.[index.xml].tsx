import { runEventsQuery } from '~/queries/events';
import { runPlaylistQuery } from '~/queries/playlists';
import { runReleasesQuery } from '~/queries/releases';
import dayjs from 'dayjs';
import {
  cleanUrl,
  getField,
  rssDateFormat,
  rssGenerator,
  RSSItem,
} from '~/utils/rss-generator';
import { runVideosQuery } from '~/queries/videos';
import { getConfig } from '~/utils/config';
import { getDate } from '~/utils/date';

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
      link: cleanUrl(`${config?.domain || ''}/events/${event.slug}`),
      pubDate: dayjs(getDate(event.date)).format(rssDateFormat),
      category: 'Events',
      author: config?.contactEmail || 'contact@cyberlife-music.com',
      enclosure: event.flyer?.front
        ? {
            _attributes: {
              url: cleanUrl(event.flyer.front),
              type: 'image/jpeg',
              length: 10000,
            },
          }
        : undefined,
    })),
    ...(podcasts.data.playlist.tracks || []).map((podcast) => ({
      title: podcast.title || '',
      description: podcast.description || '',
      link: cleanUrl(`${config?.domain || ''}/podcasts/${podcast.slug}`),
      pubDate: dayjs(podcast.date).format(rssDateFormat),
      category: 'Podcasts',
      author: config?.contactEmail || 'contact@cyberlife-music.com',
      enclosure: podcast.url
        ? {
            _attributes: {
              url: cleanUrl(
                `${config?.apiEndpoint}/cyberlife/playlists/${podcast.id}/stream`,
              ),
              type: 'audio/mpeg',
              length: 10000,
            },
          }
        : undefined,
    })),
    ...(releases.data.releaseItems || []).map((release) => ({
      title: release.release?.title || '',
      description: release.release?.bandcamp || '',
      link: cleanUrl(
        `${config?.domain || ''}/releases/${release.release?.slug}`,
      ),
      pubDate: dayjs(release.release?.releaseDate).format(rssDateFormat),
      category: 'Releases',
      author: config?.contactEmail || 'contact@cyberlife-music.com',
      enclosure: release.release?.thumb
        ? {
            _attributes: {
              url: cleanUrl(release.release.thumb),
              type: 'image/jpeg',
              length: 10000,
            },
          }
        : undefined,
    })),
    ...(videos.data.videos || []).map((video) => ({
      title: video.title || '',
      description: video.description || '',
      link: cleanUrl(`${config?.domain || ''}/videos/${video.slug}`),
      pubDate: dayjs().format(rssDateFormat),
      category: 'Videos',
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
    })),
  ].sort((a, b) => {
    return (
      dayjs(b.pubDate, rssDateFormat).unix() -
      dayjs(a.pubDate, rssDateFormat).unix()
    );
  });

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
    id: 'cyberlife-music',
    atomLink: `${config?.domain}/rss/index.xml`,
    contact: config?.contactEmail,
    image: {
      url: `https://cdn.cyberlife-music.com/images/cyberlife-bg.jpg`,
      title: 'Cyberlife Music RSS Feed',
      link: config?.domain || 'https://cyberlife-music.com',
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
