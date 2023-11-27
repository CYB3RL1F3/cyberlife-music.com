/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnSubscribeMutation
// ====================================================

export interface UnSubscribeMutationUnsubscribe {
  __typename: "deleted";
  /**
   * deleted
   */
  deleted: boolean | null;
}

export interface UnSubscribeMutation {
  unsubscribe: UnSubscribeMutationUnsubscribe;
}

export interface UnSubscribeMutationVariables {
  notificationPoolId: string;
  endpoint: string;
}
