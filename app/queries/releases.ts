import { gql } from '@apollo/client';
import { profile } from '~/config';
import releasesQuery from '~/gql/queries/releases.gql';
import releaseFragments from '~/gql/fragments/release.gql';
import { runQuery } from '~/utils/graphql';
import { getConfig } from '~/utils/config';
import trackFragment from '~/gql/fragments/track.gql';
import { ReleasesQuery, ReleasesQueryVariables } from '~/types/gql';

export const releasesGqlQuery = gql`
  ${trackFragment}
  ${releaseFragments}
  ${releasesQuery}
`;

export const runReleasesQuery = () => {
  const webshopId = getConfig()?.webshopId!;
  return runQuery<ReleasesQuery, ReleasesQueryVariables>(releasesGqlQuery, {
    profile,
    webshopId, // Ensure webshopId is provided
  });
};
