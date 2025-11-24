import { runReleasesQuery } from '~/queries/releases';
import { getConfig } from '~/utils/config';
import { getReleasesRssFeed } from '~/utils/rss/releases.rss';

const getContent = async () => {
  const releases = await runReleasesQuery();
  const config = getConfig();
  if (!releases.data.releaseItems) return null;
  const content = getReleasesRssFeed(releases.data.releaseItems, config);
  return content;
};

export const loader = async () => {
  const content = await getContent();

  const headers = {
    'Content-Type': 'application/xml',
    'xml-version': '1.0',
    encoding: 'UTF-8',
  };

  if (!content) {
    return new Response('<error>No podcasts found</error>', {
      status: 404,
      headers,
    });
  }

  return new Response(content, {
    status: 200,
    headers,
  });
};
