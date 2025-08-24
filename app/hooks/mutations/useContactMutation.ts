import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { profile } from '~/config';
import contactMutation from '~/gql/mutations/contact.gql';
import type {
  ContactMutation,
  ContactMutationVariables,
} from '~/types/gql/ContactMutation';

const contactMutationGql = gql`
  ${contactMutation}
`;

export const useContactMutation = (
  onCompleted: (data: ContactMutation) => void,
) => {
  const [mutation, mutationResults] = useMutation<
    ContactMutation,
    ContactMutationVariables
  >(contactMutationGql, {
    onCompleted,
    errorPolicy: 'all',
  });

  const contact = (message: ContactMutationVariables['message']) => {
    return mutation({
      variables: {
        profile,
        message,
      },
    });
  };
  return [contact, mutationResults] as const;
};
