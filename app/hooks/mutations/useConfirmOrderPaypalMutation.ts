import { gql, useMutation } from "@apollo/client";
import { profile } from "~/config";
import confirmOrderPaypalMutation from "~/gql/mutations/confirmOrderPaypal.gql";
import type {
  ConfirmOrderPaypal,
  ConfirmOrderPaypalVariables
} from "~/types/gql/confirmOrderPaypal";
import orderFragment from "~/gql/fragments/orders.gql";
import cartItemFragment from "~/gql/fragments/cartItem.gql";
import cartFragment from "~/gql/fragments/cart.gql";
import expeditionFragment from "~/gql/fragments/expedition.gql";
import paymentFragment from "~/gql/fragments/payment.gql";

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
    ConfirmOrderPaypal,
    ConfirmOrderPaypalVariables
  >(confirmOrderPaypalMutationGql, {
    errorPolicy: "all"
  });

  const confirmOrderPaypal = (orderId: ConfirmOrderPaypalVariables["orderId"], payment: ConfirmOrderPaypalVariables["payment"]) => {
    return mutation({
      variables: {
        profile,
        orderId,
        payment
      }
    });
  };
  return [confirmOrderPaypal, mutationResults] as const;
};
