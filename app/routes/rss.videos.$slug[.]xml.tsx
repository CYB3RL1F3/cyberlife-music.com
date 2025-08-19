import { useParams } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { runVideoQuery } from '~/queries/video';
import { getConfig } from '~/utils/config';
import { getVideoRssFeed } from '~/utils/rss/video.rss';

const getContent = async (slug: string) => {
  const video = await runVideoQuery(slug);
  const config = getConfig();
  if (!video.data.video) return null;
  const content = getVideoRssFeed(video.data.video, config);
  return content;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;

  if (!slug) {
    return new Response('<error>No slug provided</error>', { status: 400 });
  }

  const content = await getContent(slug);

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
