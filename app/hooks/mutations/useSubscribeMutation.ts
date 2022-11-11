import { gql, useMutation } from "@apollo/client";
import subscribeMutation from "~/gql/mutations/subscribe.gql";
import type {
  SubscribeMutation,
  SubscribeMutationVariables
} from "~/types/gql/SubscribeMutation";

const subscribeMutationGql = gql`
  ${subscribeMutation}
`;

export const useSubscribeMutation = (
  onCompleted: (data: SubscribeMutation) => void
) => {
  const [mutation, mutationResults] = useMutation<
    SubscribeMutation,
    SubscribeMutationVariables
  >(subscribeMutationGql, {
    onCompleted,
    errorPolicy: "all"
  });

  const contact = (
    subscription: SubscribeMutationVariables["subscription"]
  ) => {
    return mutation({
      variables: {
        notificationPoolId: "62fa4939c6d2ad9b9eeb036e",
        subscription
      }
    });
  };
  return [contact, mutationResults] as const;
};
