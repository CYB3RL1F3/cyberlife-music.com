import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils/meta";
import { useParams } from "@remix-run/react";
import EventsPage from "~/components/pages/EventsPage";
import EventPage from "~/components/pages/EventPage/EventPage";
import { runEventQuery } from "~/queries/event";
import { EventQueryEvent } from "~/types/gql/EventQuery";

export type Data = {
  data: {
    event: EventQueryEvent;
  };
};

export const meta: MetaFunction = ({ data }: Data) => {
  const event = data?.event;
  const description = `${event?.date} - ${event?.address}`;
  const image = event?.flyer?.front || undefined;
  const title = event?.title || "Cyberlife's music - event";
  return getMeta({
    title,
    image,
    description
  });
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (!id) throw new Error();
  const res = await runEventQuery(id);
  const event = res?.data?.event;
  const data = json({
    event
  });
  return data;
};

export default function EventRoute() {
  const { id } = useParams();
  if (!id) return <EventsPage />;
  return <EventPage id={id} />;
}
