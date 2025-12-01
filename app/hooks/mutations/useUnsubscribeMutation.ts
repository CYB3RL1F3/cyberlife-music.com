import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

import unsubscribeMutation from '~/gql/mutations/unsubscribe.gql';
import type {
  UnSubscribeMutation,
  UnSubscribeMutationVariables,
} from '~/types/gql';

const unsubscribeMutationGql = gql`
  ${unsubscribeMutation}
`;

export const useUnSubscribeMutation = (
  onCompleted: (data: UnSubscribeMutation) => void,
) => {
  const [mutation, mutationResults] = useMutation<
    UnSubscribeMutation,
    UnSubscribeMutationVariables
  >(unsubscribeMutationGql, {
    onCompleted,
    errorPolicy: 'all',
  });

  const unsubscribe = (
    notificationPoolId: string,
    endpoint: UnSubscribeMutationVariables['endpoint'],
  ) => {
    return mutation({
      variables: {
        notificationPoolId,
        endpoint,
      },
    });
  };
  return [unsubscribe, mutationResults] as const;
};
