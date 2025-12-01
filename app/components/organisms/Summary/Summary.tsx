import SummaryLayout from '~/components/organisms/SummaryLayout';
import ButtonLink from '~/components/atoms/ButtonLink';
import ListReleases from '~/components/organisms/ListReleases';
import ListVideosItem from '~/components/organisms/ListVideosItem';
import ListPodcasts from '~/components/organisms/ListPodcasts';
import ListEvents from '~/components/organisms/ListEvents';
import List from '~/components/organisms/List';

import type { SummaryProps } from './Summary.types';

const Summary = ({
  nextEvent,
  topPodcast,
  latestPodcast,
  latestReleases,
  latestVideo,
}: SummaryProps) => {
  return (
    <List>
      {nextEvent ? (
        <SummaryLayout
          title="Next gig"
          extra={<ButtonLink href="/events">Check out more gigs...</ButtonLink>}
        >
          <ListEvents events={[nextEvent]} />
        </SummaryLayout>
      ) : null}

      {topPodcast || latestPodcast ? (
        <SummaryLayout
          title="Latest podcasts"
          extra={
            <ButtonLink href="/podcasts">Trip with more podcasts...</ButtonLink>
          }
        >
          <ListPodcasts
            podcasts={[latestPodcast, topPodcast].filter((value) => !!value)}
          />
        </SummaryLayout>
      ) : null}

      {latestReleases?.length ? (
        <SummaryLayout
          title="Latest releases"
          extra={
            <ButtonLink href="/releases">Dive into more releases...</ButtonLink>
          }
        >
          <ListReleases releases={latestReleases} />
        </SummaryLayout>
      ) : null}

      {latestVideo ? (
        <SummaryLayout
          title="Latest videos"
          extra={<ButtonLink href="/videos">View more videos...</ButtonLink>}
        >
          <ListVideosItem video={latestVideo} />
        </SummaryLayout>
      ) : null}
    </List>
  );
};

export default Summary;
