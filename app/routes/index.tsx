import { useLoaderData, useTransition } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import PodcastsPage from "~/components/pages/PodcastsPage";
import { runPlaylistQuery } from "~/queries/playlists";
import type { PlaylistQueryPlaylist } from "~/types/gql/PlaylistQuery";
/*
export const loader: LoaderFunction = async ({ request }) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const { data, error } = await runPlaylistQuery("dj-sets");
  if (!data || error) {
    throw new Response("Technical error", {
      status: 500
    });
  }
  const { playlist } = data;
  return {
    playlist
  };
};
*/

export default function Podcast() {
  return <PodcastsPage />;
}
