import ListPodcasts from "~/components/organisms/ListPodcasts";
import { usePlaylistQuery } from "~/hooks/queries/usePlaylistQuery";
import HandlerContent from "../HandlerContent";
import Loader from "../Loader";

const ListPodcastsContainer = () => {
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

export default ListPodcastsContainer;
