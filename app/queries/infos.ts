import { gql } from '@apollo/client';
import infosQuery from '~/gql/queries/infos.gql';
import infosFragments from '~/gql/fragments/infos.gql';
import { runQuery } from '~/utils/graphql';
import { profile } from '~/config';
import { InfosQuery, InfosQueryVariables } from '~/types/gql';

export const infosGqlQuery = gql`
  ${infosFragments}
  ${infosQuery}
`;

export const runInfosQuery = async () => {
  return await runQuery<InfosQuery, InfosQueryVariables>(infosGqlQuery, {
    profile,
  });
};
