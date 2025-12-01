import { useQuery } from '@apollo/client/react';
import { profile, webshopId } from '~/config';
import { releasesGqlQuery } from '~/queries/releases';
import { ReleasesQuery, ReleasesQueryVariables } from '~/types/gql';

export const useReleasesQuery = () => {
  return useQuery<ReleasesQuery, ReleasesQueryVariables>(releasesGqlQuery, {
    variables: {
      profile,
      webshopId,
    },
  });
};
