import { useQuery } from "@apollo/client";
import { profile } from "~/config";
import type { VideoQuery, VideoQueryVariables } from "~/types/gql/VideoQuery";
import { videoGqlQuery } from "~/queries/video";

export const useVideoQuery = (
  id: VideoQueryVariables["id"],
  keyType: VideoQueryVariables["keyType"] = "slug"
) => {
  return useQuery<VideoQuery, VideoQueryVariables>(videoGqlQuery, {
    variables: {
      profile,
      id,
      keyType
    }
  });
};
