/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartItemInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: CarrierPrices
// ====================================================

export interface CarrierPricesCarrierPrices {
  __typename: "CarrierPrice";
  /**
   * Carrier ups price
   */
  upsPrice: number;
  /**
   * Carrier collissimo price
   */
  colissimoPrice: number;
  /**
   * Carrier Mondial Relay price
   */
  mondialRelayPrice: number | null;
}

export interface CarrierPrices {
  carrierPrices: CarrierPricesCarrierPrices;
}

export interface CarrierPricesVariables {
  profile: string;
  country: string;
  items: CartItemInput[];
}
