/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionDto } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubscribeMutation
// ====================================================

export interface SubscribeMutationSubscribeKeys {
  __typename: "SubscriptionKey";
  /**
   * Notification Pool's Subscription notification auth key
   */
  auth: string | null;
  /**
   * Notification Pool's Subscription notification p256dh key
   */
  p256dh: string | null;
}

export interface SubscribeMutationSubscribe {
  __typename: "Subscription";
  /**
   * Notification Pool's Subscription endpoint
   */
  endpoint: string | null;
  /**
   * Notification Pool's Subscription keys
   */
  keys: SubscribeMutationSubscribeKeys | null;
}

export interface SubscribeMutation {
  subscribe: SubscribeMutationSubscribe;
}

export interface SubscribeMutationVariables {
  notificationPoolId: string;
  subscription: SubscriptionDto;
}
