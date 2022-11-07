import { Suspense } from "react";
import ListPodcasts from "~/components/organisms/ListPodcasts";
import { usePlaylistQuery } from "~/hooks/queries/usePlaylistQuery";
import PageLoader from "../PageLoader";

const ListPodcastsContainer = () => {
  const { data } = usePlaylistQuery("dj-sets");
  return (
    <Suspense fallback={<PageLoader />}>
      <ListPodcasts podcasts={data?.playlist?.tracks} />;
    </Suspense>
  );
};

export default ListPodcastsContainer;
