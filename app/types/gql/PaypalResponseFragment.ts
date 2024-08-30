/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PaypalResponseFragment
// ====================================================

export interface PaypalResponseFragmentIntentLinks {
  __typename: "PaypalLink";
  /**
   * Link URL
   */
  href: string;
  /**
   * Link URL
   */
  rel: string;
  /**
   * Method
   */
  method: string;
}

export interface PaypalResponseFragmentIntent {
  __typename: "PaypalIntent";
  /**
   * Status
   */
  status: string;
  /**
   * ID
   */
  id: string;
  /**
   * Links
   */
  links: PaypalResponseFragmentIntentLinks[];
}

export interface PaypalResponseFragment {
  __typename: "PaypalResponse";
  /**
   * Intent
   */
  intent: PaypalResponseFragmentIntent;
  /**
   * Status
   */
  status: number;
}
