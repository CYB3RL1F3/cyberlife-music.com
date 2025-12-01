import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { postGqlQuery } from '~/queries/post';
import { PostQuery, PostQueryVariables } from '~/types/gql';

export const usePostQuery = (id: string) => {
  return useQuery<PostQuery, PostQueryVariables>(postGqlQuery, {
    variables: {
      profile,
      id,
    },
  });
};
