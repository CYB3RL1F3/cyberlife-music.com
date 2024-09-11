/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExpeditionFragment
// ====================================================

export interface ExpeditionFragmentAddress {
  __typename: "Address";
  /**
   * name
   */
  name: string;
  /**
   * address
   */
  address: string;
  /**
   * Zip code
   */
  zipCode: string;
  /**
   * City name
   */
  city: string;
  /**
   * Country
   */
  country: string;
  /**
   * Extra informations
   */
  extra: string | null;
}

export interface ExpeditionFragment {
  __typename: "Expedition";
  /**
   * tracking number
   */
  trackingNumber: string | null;
  /**
   * service
   */
  service: string;
  /**
   * service
   */
  status: string;
  /**
   * postal address
   */
  address: ExpeditionFragmentAddress;
  /**
   * email for order
   */
  email: string;
  /**
   * phone number
   */
  phone: string;
  /**
   * amount ttc
   */
  amountWithTax: number;
  /**
   * amount ttc
   */
  vat: number;
}
