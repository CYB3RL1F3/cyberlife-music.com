import EventsPage from "~/components/pages/EventsPage";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { runInfosQuery } from "~/queries/infos";
import { getConfig } from "~/utils/config";
import { getMeta } from "~/utils/meta";
import { runEventsQuery } from "~/queries/events";
import { useCacheableLoaderData } from "~/hooks/useCacheableLoaderData";
import { useTransition } from "@remix-run/react";

export const meta: MetaFunction = ({ data }) => {
  const description = data?.description;
  const title = `Cyberlife Music - Gigs`;
  return getMeta({
    title,
    description
  });
};

export const loader: LoaderFunction = async () => {
  const [res, { data }] = await Promise.all([
    await runInfosQuery(),
    await runEventsQuery()
  ]);
  const description = res?.data?.infos?.bio?.content;
  const events = data?.events;
  const config = getConfig();
  return json({
    description,
    events,
    config
  });
};

export default function EventsRoute() {
  const data = useCacheableLoaderData();
  const transition = useTransition();
  const loading =
    transition.state === "loading" || (transition.state === "idle" && !data);
  return <EventsPage data={data} loading={loading} />;
}
