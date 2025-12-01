import { gql } from '@apollo/client';
import { profile } from '~/config';
import summaryQuery from '~/gql/queries/summary.gql';
import releaseFragment from '~/gql/fragments/release.gql';
import videoFragment from '~/gql/fragments/video.gql';
import trackFragment from '~/gql/fragments/track.gql';
import eventFragment from '~/gql/fragments/events.gql';
import summaryFragment from '~/gql/fragments/summary.gql';
import { runQuery } from '~/utils/graphql';
import { getConfig } from '~/utils/config';
import { SummaryQuery, SummaryQueryVariables } from '~/types/gql';

export const summaryGqlQuery = gql`
  ${releaseFragment}
  ${trackFragment}
  ${videoFragment}
  ${eventFragment}
  ${summaryFragment}
  ${summaryQuery}
`;

export type SummaryVariables = Pick<
  SummaryQueryVariables,
  'playlist' | 'topPodcastId' | 'expectedNbReleases' | 'webshopId'
>;

export const runSummaryQuery = ({
  playlist,
  topPodcastId,
  expectedNbReleases = 2,
  webshopId = getConfig()?.webshopId!,
}: SummaryVariables) => {
  return runQuery<SummaryQuery, SummaryQueryVariables>(summaryGqlQuery, {
    profile,
    webshopId,
    playlist,
    topPodcastId,
    expectedNbReleases,
  });
};
