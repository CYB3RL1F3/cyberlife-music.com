import { useParams } from "@remix-run/react";
import PodcastsPage from "~/components/pages/PodcastsPage";
import PodcastPage from "~/components/pages/PodcastPage";

export default function PodcastRoute() {
  const { id } = useParams();
  if (!id) return <PodcastsPage />;
  return <PodcastPage id={id} />;
}
