/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PaypalIntentFragment
// ====================================================

export interface PaypalIntentFragmentLinks {
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

export interface PaypalIntentFragment {
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
  links: PaypalIntentFragmentLinks[];
}
