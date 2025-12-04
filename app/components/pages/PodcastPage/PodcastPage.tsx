import ButtonLink from '~/components/atoms/ButtonLink';
import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import ViewPodcast from '~/components/organisms/ViewPodcast';
import ErrorPage from '~/components/pages/ErrorPage';
import { usePlaylistTrackQuery } from '~/hooks/queries/usePlaylistTrackQuery';

import type { PodcastPageProps } from './PodcastPage.types';
import { usePlaylistQuery } from '~/hooks/queries/usePlaylistQuery';

const PodcastPage = ({ id }: PodcastPageProps) => {
  const { data, loading } = usePlaylistTrackQuery(id);
  const { data: podcasts, loading: loadingPodcasts } =
    usePlaylistQuery('dj-sets');
  return (
    <HandlerContent
      loading={!data && loading && !podcasts && loadingPodcasts}
      loader={<Loader message="Please wait while we're chasing podcast..." />}
    >
      {data?.playlistTrack ? (
        <ViewPodcast
          podcast={data?.playlistTrack}
          podcasts={podcasts?.playlist?.tracks || []}
        />
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
