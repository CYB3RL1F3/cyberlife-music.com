import { useParams } from "@remix-run/react";
import PodcastsPage from "~/components/pages/PodcastsPage";
import PodcastPage from "~/components/pages/PodcastPage";

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { runPlaylistTrackQuery } from "~/queries/playlistTrack";
import { PlaylistTrackQueryPlaylistTrack } from "~/types/gql/PlaylistTrackQuery";
import { getMeta } from "~/utils/meta";

export type Data = {
  data: {
    playlistTrack: PlaylistTrackQueryPlaylistTrack;
  };
};

export const meta: MetaFunction = ({ data }: Data) => {
  const playlistTrack = data?.playlistTrack;
  const description = playlistTrack?.description;
  const image = playlistTrack?.artwork || undefined;
  const title = playlistTrack?.title || "Cyberlife's music - podcast";
  return getMeta({
    title,
    image,
    description
  });
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (!id) throw new Error();
  const res = await runPlaylistTrackQuery(id);
  const playlistTrack = res?.data?.playlistTrack;
  const data = json({
    playlistTrack
  });
  return data;
};

export default function PodcastRoute() {
  const { id } = useParams();
  if (!id) return <PodcastsPage />;
  return <PodcastPage id={id} />;
}
