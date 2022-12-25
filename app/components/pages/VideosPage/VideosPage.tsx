import { useVideosQuery } from "~/hooks/queries/useVideosQuery";
import ListVideos from "~/components/organisms/ListVideos";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";

const VideosPage = () => {
  const { data, loading } = useVideosQuery();
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing videos..." />}
    >
      <ListVideos videos={data?.videos} />
    </HandlerContent>
  );
};

export default VideosPage;
