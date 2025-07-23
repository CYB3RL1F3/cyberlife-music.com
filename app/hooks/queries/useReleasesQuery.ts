import { useQuery } from "@apollo/client";
import { profile, webshopId } from "~/config";
import type {
  ReleasesQuery,
  ReleasesQueryVariables
} from "~/types/gql/ReleasesQuery";
import { releasesGqlQuery } from "~/queries/releases";

export const useReleasesQuery = () => {
  return useQuery<ReleasesQuery, ReleasesQueryVariables>(releasesGqlQuery, {
    variables: {
      profile,
      webshopId
    }
  });
};
