import type { LoaderFunction } from "@remix-run/server-runtime";
import PodcastsPage from "~/components/pages/PodcastsPage";
import { runPlaylistQuery } from "~/queries/playlists";

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

export default function Podcast() {
  return <PodcastsPage />;
}
