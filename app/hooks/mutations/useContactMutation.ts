import { gql, useQuery } from "@apollo/client";
import { profile } from "~/config";
import contactMutation from "~/gql/mutations/contact.gql";
import type {
  ContactMutation,
  ContactMutationVariables
} from "~/types/gql/ContactMutation";

const mutation = gql`
  ${contactMutation}
`;

export const useContactMutation = (
  message: ContactMutationVariables["message"]
) => {
  return useQuery<ContactMutation, ContactMutationVariables>(mutation, {
    variables: {
      profile,
      message
    }
  });
};
