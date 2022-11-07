import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import infosQuery from "~/gql/queries/infos.gql";
import type { InfosQuery, InfosQueryVariables } from "~/types/gql/InfosQuery";

const query = gql`
  ${infosQuery}
`;

export const useInfosQuery = () => {
  return useQuery<InfosQuery, InfosQueryVariables>(query, {
    variables: {
      profile
    }
  });
};
