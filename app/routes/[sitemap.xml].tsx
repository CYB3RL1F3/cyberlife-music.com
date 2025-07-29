import { sitemapGenerator } from '~/utils/sitemap-generator';
import type { Path } from '~/utils/sitemap-generator';
import { runEventsQuery } from '~/queries/events';
import { runPlaylistQuery } from '~/queries/playlists';
import { runReleasesQuery } from '~/queries/releases';
import dayjs from 'dayjs';
import { runVideosQuery } from '~/queries/videos';

const getPath = (
  loc: string,
  priority = 1,
  changeFreq: Path['changeFreq'] = 'daily',
) => ({
  loc,
  lastMod: dayjs().format('YYYY-MM-DD'),
  priority,
  changeFreq,
});

const getPaths = async (): Promise<Path[]> => {
  const [events, podcasts, releases, videos] = await Promise.all([
    runEventsQuery(),
    runPlaylistQuery('dj-sets'),
    runReleasesQuery(),
    runVideosQuery(),
  ]);
  const paths: Path[] = [
    getPath('/'),
    getPath('/podcasts'),
    getPath('/events'),
    getPath('/releases', 0.8),
    getPath('/contact', 0.5, 'monthly'),
    getPath('/about', 0.5, 'monthly'),
    getPath('/legal-notice', 0.5, 'monthly'),
  ];
  const eventsPaths = (events.data.events || []).map((event) =>
    getPath(`/events/${event.slug}`),
  );
  const podcastsPaths = (podcasts.data.playlist.tracks || []).map((podcast) =>
    getPath(`/podcasts/${podcast.slug}`),
  );
  const releasesPaths = (releases.data.releaseItems || [])
    .filter((release) => release.release?.slug)
    .map((release) => getPath(`/releases/${release.release?.slug}`));

  const videosPaths = (videos.data.videos || []).map((video) =>
    getPath(`/videos/${video.slug}`),
  );
  return [
    ...paths,
    ...podcastsPaths,
    ...releasesPaths,
    ...eventsPaths,
    ...videosPaths,
  ];
};

export const loader = async () => {
  const paths = await getPaths();
  const content = await sitemapGenerator(paths);
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};
