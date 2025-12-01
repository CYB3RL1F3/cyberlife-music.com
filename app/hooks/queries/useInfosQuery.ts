import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { infosGqlQuery } from '~/queries/infos';
import { InfosQuery, InfosQueryVariables } from '~/types/gql';

export const useInfosQuery = () => {
  return useQuery<InfosQuery, InfosQueryVariables>(infosGqlQuery, {
    variables: {
      profile,
    },
  });
};
