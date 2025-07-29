import { LinksFunction } from '@remix-run/server-runtime';
import EventsPage from '~/components/pages/EventsPage';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Cyberlife Music Events RSS Feed',
      href: '/rss/events.xml',
    },
  ];
};

export default function EventsRoute() {
  return <EventsPage />;
}
