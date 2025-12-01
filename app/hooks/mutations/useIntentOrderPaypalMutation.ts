import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

import { profile } from '~/config';
import intentOrderPaypalMutation from '~/gql/mutations/intentOrderPaypal.gql';
import orderFragment from '~/gql/fragments/orders.gql';
import cartItemFragment from '~/gql/fragments/cartItem.gql';
import cartFragment from '~/gql/fragments/cart.gql';
import expeditionFragment from '~/gql/fragments/expedition.gql';
import paymentFragment from '~/gql/fragments/payment.gql';
import paypalFragment from '~/gql/fragments/paypal.gql';

import {
  IntentOrderPaypalMutation,
  IntentOrderPaypalMutationVariables,
} from '~/types/gql';

const intentOrderPaypalMutationGql = gql`
  ${cartItemFragment}
  ${cartFragment}
  ${expeditionFragment}
  ${paymentFragment}
  ${orderFragment}
  ${paypalFragment}
  ${intentOrderPaypalMutation}
`;

export const useIntentOrderPaypalMutation = () => {
  const [mutation, mutationResults] = useMutation<
    IntentOrderPaypalMutation,
    IntentOrderPaypalMutationVariables
  >(intentOrderPaypalMutationGql, {
    errorPolicy: 'all',
  });

  const intentOrderPaypal = (
    order: IntentOrderPaypalMutationVariables['order'],
  ) => {
    return mutation({
      variables: {
        profile,
        order,
      },
    });
  };
  return [intentOrderPaypal, mutationResults] as const;
};
