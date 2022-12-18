import { json } from "@remix-run/node";
import { useTransition } from "@remix-run/react";
import PodcastsPage from "~/components/pages/PodcastsPage";
import { useCacheableLoaderData } from "~/hooks/useCacheableLoaderData";
import { runPlaylistQuery } from "~/queries/playlists";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const data = await runPlaylistQuery("dj-sets");
  console.log("LOADER !");
  return json({
    playlist: data?.data?.playlist
  });
};

export default function IndexRoute() {
  const transition = useTransition();
  const data = useCacheableLoaderData<typeof loader>();
  const loading =
    transition.state === "loading" || (transition.state === "idle" && !data);
  console.log("LOADING PODCASTS");
  return <PodcastsPage data={data} loading={loading} />;
}
