import type { LoaderFunction } from "@remix-run/server-runtime";
import PodcastsPage from "~/components/pages/PodcastsPage";
import { runPlaylistQuery } from "~/queries/playlists";
import { PlaylistQueryPlaylist } from "~/types/gql/PlaylistQuery";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const { data, error } = await runPlaylistQuery("dj-sets");
  if (!data || error) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const { playlist } = data;
  return {
    playlist
  };
};

export default function PodcastRoute() {
  const data = useLoaderData();
  return <PodcastsPage data={data} />;
}
