import type { VideoPageProps } from "./VideoPage.types";
import { useVideoQuery } from "~/hooks/queries/useVideoQuery";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import VideoDisplay from "~/components/organisms/VideoDisplay";
import ErrorPage from "../ErrorPage";
import ButtonLink from "~/components/atoms/ButtonLink";

const VideoPage = ({ id }: VideoPageProps) => {
  const { data, loading } = useVideoQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing video..." />}
    >
      {data?.video ? (
        <VideoDisplay video={data.video} />
      ) : (
        <ErrorPage
          code={404}
          message="Video not found"
          extra={<ButtonLink href="/videos">Check out videos</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default VideoPage;
