/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SubscriptionFragment
// ====================================================

export interface SubscriptionFragmentKeys {
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

export interface SubscriptionFragment {
  __typename: "Subscription";
  /**
   * Notification Pool's Subscription endpoint
   */
  endpoint: string | null;
  /**
   * Notification Pool's Subscription keys
   */
  keys: SubscriptionFragmentKeys | null;
}
