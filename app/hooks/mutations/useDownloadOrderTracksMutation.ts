import downloadOrderFragment from '~/gql/fragments/download.gql';
import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

import { profile } from '~/config';
import downloadOrderTracksMutation from '~/gql/mutations/downloadOrderTracks.gql';
import type {
  DownloadOrderTracksMutation,
  DownloadOrderTracksMutationVariables,
} from '~/types/gql';

const downloadOrderTracksMutationGql = gql`
  ${downloadOrderFragment}
  ${downloadOrderTracksMutation}
`;

export const useDownloadOrderTracksMutation = (
  onCompleted: (data: DownloadOrderTracksMutation) => void,
  onError: (error: any) => void,
) => {
  const [mutation, mutationResults] = useMutation<
    DownloadOrderTracksMutation,
    DownloadOrderTracksMutationVariables
  >(downloadOrderTracksMutationGql, {
    onCompleted,
    onError,
    errorPolicy: 'all',
  });

  const downloadOrderTracks = (
    variables: Omit<DownloadOrderTracksMutationVariables, 'profile'>,
  ) => {
    return mutation({
      variables: {
        ...variables,
        profile,
      },
    });
  };
  return [downloadOrderTracks, mutationResults] as const;
};
