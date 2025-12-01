import ButtonLink from '~/components/atoms/ButtonLink';
import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import ViewPodcast from '~/components/organisms/ViewPodcast';
import ErrorPage from '~/components/pages/ErrorPage';
import { usePlaylistTrackQuery } from '~/hooks/queries/usePlaylistTrackQuery';

import type { PodcastPageProps } from './PodcastPage.types';

const PodcastPage = ({ id }: PodcastPageProps) => {
  const { data, loading } = usePlaylistTrackQuery(id);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={<Loader message="Please wait while we're chasing podcast..." />}
    >
      {data?.playlistTrack ? (
        <ViewPodcast podcast={data?.playlistTrack} />
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
