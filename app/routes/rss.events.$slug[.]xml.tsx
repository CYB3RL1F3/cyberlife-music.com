import { useParams } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { runEventQuery } from '~/queries/event';
import { getConfig } from '~/utils/config';
import { getEventRssFeed } from '~/utils/rss/event.rss';

const getContent = async (slug: string) => {
  const podcast = await runEventQuery(slug);
  const config = getConfig();
  if (!podcast.data.event) return null;
  const content = getEventRssFeed(podcast.data.event, config);
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
