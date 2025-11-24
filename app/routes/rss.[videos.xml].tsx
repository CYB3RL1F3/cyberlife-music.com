import { runVideosQuery } from '~/queries/videos';
import { getConfig } from '~/utils/config';
import { getVideosRssFeed } from '~/utils/rss/videos.rss';

const getContent = async () => {
  const videos = await runVideosQuery();
  const config = getConfig();
  if (!videos.data?.videos) return null;
  const content = getVideosRssFeed(videos.data.videos, config);
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
    return new Response('<error>No videos found</error>', {
      status: 404,
      headers,
    });
  }

  return new Response(content, {
    status: 200,
    headers,
  });
};
