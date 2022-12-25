import { useQuery } from "@apollo/client";
import { profile } from "~/config";
import type {
  VideosQuery,
  VideosQueryVariables
} from "~/types/gql/VideosQuery";
import { videosGqlQuery } from "~/queries/videos";

export const useVideosQuery = () => {
  return useQuery<VideosQuery, VideosQueryVariables>(videosGqlQuery, {
    variables: {
      profile
    }
  });
};
