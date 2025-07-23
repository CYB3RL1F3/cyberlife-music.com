import { gql, useMutation } from '@apollo/client';
import { profile } from '~/config';
import cancelOrderMutation from '~/gql/mutations/cancelOrderMutation.gql';
import type {
  CancelOrder,
  CancelOrderVariables,
} from '~/types/gql/cancelOrder';

const cancelOrderMutationGql = gql`
  ${cancelOrderMutation}
`;

export const useCancelOrderMutation = () => {
  const [mutation, mutationResults] = useMutation<
    CancelOrder,
    CancelOrderVariables
  >(cancelOrderMutationGql, {
    errorPolicy: 'all',
  });

  const cancelOrder = (orderId: CancelOrderVariables['orderId']) => {
    return mutation({
      variables: {
        profile,
        orderId,
      },
    });
  };
  return [cancelOrder, mutationResults] as const;
};
