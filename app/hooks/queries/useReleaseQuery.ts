import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { releaseGqlQuery } from '~/queries/release';
import { ReleaseQuery, ReleaseQueryVariables } from '~/types/gql';

export const useReleaseQuery = (id: ReleaseQueryVariables['id']) => {
  return useQuery<ReleaseQuery, ReleaseQueryVariables>(releaseGqlQuery, {
    variables: {
      profile,
      id,
    },
  });
};
