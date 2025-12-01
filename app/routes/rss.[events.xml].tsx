import { runEventsQuery } from '~/queries/events';
import { getConfig } from '~/utils/config';
import { getEventsRssFeed } from '~/utils/rss/events.rss';

const getContent = async () => {
  const config = getConfig();
  const events = await runEventsQuery();

  const content = getEventsRssFeed(events.data?.events, config);
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
    return new Response('<error>No events found</error>', {
      status: 404,
      headers,
    });
  }

  return new Response(content, {
    status: 200,
    headers,
  });
};
