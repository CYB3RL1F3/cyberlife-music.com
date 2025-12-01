import { gql } from '@apollo/client';
import { profile } from '~/config';
import postQuery from '~/gql/queries/post.gql';
import postFragments from '~/gql/fragments/post.gql';
import type { PostQuery, PostQueryVariables } from '~/types/gql';
import { runQuery } from '~/utils/graphql';

export const postGqlQuery = gql`
  ${postFragments}
  ${postQuery}
`;

export const runPostQuery = (id: string) => {
  return runQuery<PostQuery, PostQueryVariables>(postGqlQuery, {
    profile,
    id,
  });
};
