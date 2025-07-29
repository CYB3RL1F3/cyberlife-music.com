import dayjs from 'dayjs';
import { rssGenerator, RSSItem } from '~/utils/rss-generator';
import { getConfig } from '~/utils/config';
import { runReleasesQuery } from '~/queries/releases';

const getItems = async (): Promise<RSSItem[]> => {
  const events = await runReleasesQuery();
  const config = getConfig();

  const items: RSSItem[] = events.data.releaseItems.map((release) => ({
    title: release.release?.title || '',
    description: release.release?.bandcamp || '',
    link: `${config?.domain || ''}/releases/${release.release?.slug}`,
    pubDate: dayjs(release.release?.releaseDate).format(),
    guid: `${release.id}`,
    category: 'Releases',
    author: 'Cyberlife Music',
  }));

  return items;
};

export const loader = async () => {
  const config = getConfig();
  const items = await getItems();

  const content = await rssGenerator({
    title: 'Cyberlife Music Releases RSS Feed',
    description: "Cyberlife Music's releases",
    link: `${config?.domain}/releases`,
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
