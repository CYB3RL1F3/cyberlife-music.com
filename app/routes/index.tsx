import type { LoaderFunction } from "@remix-run/server-runtime";
import PodcastsPage from "~/components/pages/PodcastsPage";
import { runPlaylistQuery } from "~/queries/playlists";

export const loader: LoaderFunction = async ({ request }) => {
  const { data, error } = await runPlaylistQuery("dj-sets");
  if (!data || error) {
    throw new Response("Technical error", {
      status: 500
    });
  }
  return data;
};

export default function Podcast() {
  return <PodcastsPage />;
}
