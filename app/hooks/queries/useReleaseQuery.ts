import { useQuery } from "@apollo/client";
import { profile } from "~/config";
import { releaseGqlQuery } from "~/queries/release";
import type {
  ReleaseQuery,
  ReleaseQueryVariables
} from "~/types/gql/ReleaseQuery";

export const useReleaseQuery = (
  id: ReleaseQueryVariables["id"],
  keyType: ReleaseQueryVariables["keyType"] = "slug"
) => {
  return useQuery<ReleaseQuery, ReleaseQueryVariables>(releaseGqlQuery, {
    variables: {
      profile,
      id,
      keyType
    }
  });
};
