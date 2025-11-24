import { useParams } from '@remix-run/react';
import EventsPage from '~/components/pages/EventsPage';
import EventPage from '~/components/pages/EventPage/EventPage';
import ErrorPage from '~/components/pages/ErrorPage';

export default function EventRoute() {
  const { id } = useParams();
  if (!id) return <EventsPage />;
  return <EventPage id={id} />;
}

export const CatchBoundary = () => {
  return (
    <ErrorPage
      code={500}
      message="An error occurred while loading this event page"
    />
  );
};
