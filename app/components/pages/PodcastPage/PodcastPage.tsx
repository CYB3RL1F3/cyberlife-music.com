import type { PodcastPageProps } from "./PodcastPage.types";
import { usePlaylistTrackQuery } from "~/hooks/queries/usePlaylistTrackQuery";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import PodcastDisplay from "~/components/organisms/PodcastDisplay";
import ErrorPage from "../ErrorPage";
import ButtonLink from "~/components/atoms/ButtonLink";

const PodcastPage = ({ id }: PodcastPageProps) => {
  const { data, loading } = usePlaylistTrackQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader notification="Please wait while we're chasing podcast..." />
      }
    >
      {data?.playlistTrack ? (
        <PodcastDisplay podcast={data?.playlistTrack} />
      ) : (
        <ErrorPage
          code={404}
          message="Podcast not found"
          extra={<ButtonLink href="/">Check out existing podcasts</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default PodcastPage;
