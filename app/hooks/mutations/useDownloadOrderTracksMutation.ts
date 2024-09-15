import releaseFragment from '~/gql/fragments/ReleaseSnippetFragment.gql';
import downloadOrderFragment from '~/gql/fragments/download.gql';
import { gql, useMutation } from "@apollo/client";
import { profile } from "~/config";
import downloadOrderTracksMutation from "~/gql/mutations/downloadOrderTracks.gql";
import type {
  DownloadOrderTracks,
  DownloadOrderTracksVariables
} from "~/types/gql/DownloadOrderTracks";

const downloadOrderTracksMutationGql = gql`
  ${downloadOrderFragment}
  ${downloadOrderTracksMutation}
`;

export const useDownloadOrderTracksMutation = (
onCompleted: (data: DownloadOrderTracks) => void, onError: (error: any) => void) => {
  const [mutation, mutationResults] = useMutation<
  DownloadOrderTracks,
  DownloadOrderTracksVariables
  >(downloadOrderTracksMutationGql, {
    onCompleted,
    onError,
    errorPolicy: "all"
  });

  const downloadOrderTracks = (variables: Omit<DownloadOrderTracksVariables, 'profile'>) => {
    return mutation({
      variables: {
        ...variables,
        profile
      }
    });
  };
  return [downloadOrderTracks, mutationResults] as const;
};
