import ReleasesPage from "~/components/pages/ReleasesPage";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { runInfosQuery } from "~/queries/infos";
import { getConfig } from "~/utils/config";
import { getMeta } from "~/utils/meta";
import { useLoaderData, useTransition } from "@remix-run/react";
import { runReleasesQuery } from "~/queries/releases";
import { useCacheableLoaderData } from "~/hooks/useCacheableLoaderData";

export const meta: MetaFunction = ({ data }) => {
  const description = data?.description;
  const title = `Cyberlife Music - Releases`;
  return getMeta({
    title,
    description
  });
};

export const loader: LoaderFunction = async () => {
  const [infos, { data, error }] = await Promise.all([
    await runInfosQuery(),
    await runReleasesQuery()
  ]);
  const description = infos?.data?.infos?.bio?.content;
  const releases = data?.releases;
  const config = getConfig();
  if (!releases || error) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return json({
    description,
    releases,
    config
  });
};

export default function ReleasesRoute() {
  const data = useCacheableLoaderData<typeof loader>();
  const transition = useTransition();
  const loading =
    transition.state === "loading" || (transition.state === "idle" && !data);
  return <ReleasesPage data={data} loading={loading} />;
}
