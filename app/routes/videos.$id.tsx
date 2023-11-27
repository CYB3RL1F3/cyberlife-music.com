import { useParams } from "@remix-run/react";
import VideoPage from "~/components/pages/VideoPage";
import VideosPage from "~/components/pages/VideosPage";

export default function VideoRoute() {
  const { id } = useParams();
  if (!id) return <VideosPage />;
  return <VideoPage id={id} />;
}
