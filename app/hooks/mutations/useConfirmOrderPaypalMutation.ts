import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { profile } from '~/config';
import confirmOrderPaypalMutation from '~/gql/mutations/confirmOrderPaypal.gql';

import orderFragment from '~/gql/fragments/orders.gql';
import cartItemFragment from '~/gql/fragments/cartItem.gql';
import cartFragment from '~/gql/fragments/cart.gql';
import expeditionFragment from '~/gql/fragments/expedition.gql';
import paymentFragment from '~/gql/fragments/payment.gql';
import {
  ConfirmOrderPaypalMutation,
  ConfirmOrderPaypalMutationVariables,
} from '~/types/gql';

const confirmOrderPaypalMutationGql = gql`
  ${cartItemFragment}
  ${cartFragment}
  ${expeditionFragment}
  ${paymentFragment}
  ${orderFragment}
  ${confirmOrderPaypalMutation}
`;

export const useConfirmOrderPaypalMutation = () => {
  const [mutation, mutationResults] = useMutation<
    ConfirmOrderPaypalMutation,
    ConfirmOrderPaypalMutationVariables
  >(confirmOrderPaypalMutationGql, {
    errorPolicy: 'all',
  });

  const confirmOrderPaypal = (
    orderId: ConfirmOrderPaypalMutationVariables['orderId'],
    payment: ConfirmOrderPaypalMutationVariables['payment'],
  ) => {
    return mutation({
      variables: {
        profile,
        orderId,
        payment,
      },
    });
  };
  return [confirmOrderPaypal, mutationResults] as const;
};
