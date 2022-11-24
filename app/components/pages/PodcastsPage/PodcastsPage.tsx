import ListPodcasts from "~/components/organisms/ListPodcasts";
import { usePlaylistQuery } from "~/hooks/queries/usePlaylistQuery";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";

const PodcastsPage = () => {
  const { data, loading } = usePlaylistQuery("dj-sets");

  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader mention="Please wait while we're chasing podcasts..." />}
    >
      <ListPodcasts
        artwork={data?.playlist?.artwork}
        podcasts={data?.playlist?.tracks}
      />
    </HandlerContent>
  );
};

export default PodcastsPage;
