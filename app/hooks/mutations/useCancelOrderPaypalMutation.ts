import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

import { profile } from '~/config';
import cancelOrderMutation from '~/gql/mutations/cancelOrderMutation.gql';
import { CancelOrderMutation, CancelOrderMutationVariables } from '~/types/gql';

const cancelOrderMutationGql = gql`
  ${cancelOrderMutation}
`;

export const useCancelOrderMutation = () => {
  const [mutation, mutationResults] = useMutation<
    CancelOrderMutation,
    CancelOrderMutationVariables
  >(cancelOrderMutationGql, {
    errorPolicy: 'all',
  });

  const cancelOrder = (orderId: CancelOrderMutationVariables['orderId']) => {
    return mutation({
      variables: {
        profile,
        orderId,
      },
    });
  };
  return [cancelOrder, mutationResults] as const;
};
