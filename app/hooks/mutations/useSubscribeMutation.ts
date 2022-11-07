import { gql, useQuery } from "@apollo/client";
import subscribeMutation from "~/gql/mutations/subscribe.gql";
import type {
  SubscribeMutation,
  SubscribeMutationVariables
} from "~/types/gql/SubscribeMutation";

const mutation = gql`
  ${subscribeMutation}
`;

export const useSubscribeMutation = (
  subscription: SubscribeMutationVariables["subscription"]
) => {
  return useQuery<SubscribeMutation, SubscribeMutationVariables>(mutation, {
    variables: {
      notificationPoolId: "62fa4939c6d2ad9b9eeb036e",
      subscription
    }
  });
};
