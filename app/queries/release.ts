import { gql } from '@apollo/client';

import { profile } from '~/config';
import releaseQuery from '~/gql/queries/release.gql';
import releaseFragments from '~/gql/fragments/release.gql';
import { runQuery } from '~/utils/graphql';
import trackFragment from '~/gql/fragments/track.gql';
import { ReleaseQuery, ReleaseQueryVariables } from '~/types/gql';

export const releaseGqlQuery = gql`
  ${trackFragment}
  ${releaseFragments}
  ${releaseQuery}
`;

export const runReleaseQuery = (id: ReleaseQueryVariables['id']) => {
  return runQuery<ReleaseQuery, ReleaseQueryVariables>(releaseGqlQuery, {
    profile,
    id,
  });
};
