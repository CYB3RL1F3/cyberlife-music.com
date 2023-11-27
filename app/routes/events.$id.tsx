import { useParams } from "@remix-run/react";
import EventsPage from "~/components/pages/EventsPage";
import EventPage from "~/components/pages/EventPage/EventPage";

export default function EventRoute() {
  const { id } = useParams();
  if (!id) return <EventsPage />;
  return <EventPage id={id} />;
}
