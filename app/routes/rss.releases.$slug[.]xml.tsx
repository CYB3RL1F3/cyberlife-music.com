import { useParams } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { runReleaseQuery } from '~/queries/release';
import { getConfig } from '~/utils/config';
import { getReleaseRssFeed } from '~/utils/rss/release.rss';

const getContent = async (slug: string) => {
  const release = await runReleaseQuery(slug);
  const config = getConfig();
  if (!release.data.releaseItem) return null;
  const content = getReleaseRssFeed(release.data.releaseItem, config);
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
    return new Response('<error>No releases found</error>', {
      status: 404,
      headers,
    });
  }

  return new Response(content, {
    status: 200,
    headers,
  });
};
