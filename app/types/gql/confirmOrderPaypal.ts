/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ConfirmOrderPaypal
// ====================================================

export interface ConfirmOrderPaypalConfirmOrderPaypalCartItems {
  __typename: "CartItem";
  /**
   * Cart item Id
   */
  id: string;
  /**
   * Cart item quantity
   */
  quantity: number;
  /**
   * Cart item price
   */
  amount: number;
  /**
   * Cart item product id
   */
  productId: string;
}

export interface ConfirmOrderPaypalConfirmOrderPaypalCart {
  __typename: "Cart";
  /**
   * product id
   */
  items: ConfirmOrderPaypalConfirmOrderPaypalCartItems[];
  /**
   * Cart total amount
   */
  amount: number;
  /**
   * amount ttc
   */
  amountWithTax: number;
  /**
   * amount ttc
   */
  vat: number;
  /**
   * Cart total redeem code
   */
  redeem: string | null;
}

export interface ConfirmOrderPaypalConfirmOrderPaypalExpeditionAddress {
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

export interface ConfirmOrderPaypalConfirmOrderPaypalExpedition {
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
  address: ConfirmOrderPaypalConfirmOrderPaypalExpeditionAddress;
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

export interface ConfirmOrderPaypalConfirmOrderPaypalPayment {
  __typename: "Payment";
  /**
   * payment ID
   */
  id: string;
  /**
   * Transaction ID
   */
  transactionId: string;
  /**
   * Order payment method
   */
  paymentMethod: string;
  /**
   * Order transaction date
   */
  transactionDate: any;
}

export interface ConfirmOrderPaypalConfirmOrderPaypal {
  __typename: "Order";
  /**
   * product id
   */
  cart: ConfirmOrderPaypalConfirmOrderPaypalCart;
  /**
   * Order date
   */
  orderAt: any;
  /**
   * Order update date
   */
  updatedAt: any;
  /**
   * Order expedition
   */
  expedition: ConfirmOrderPaypalConfirmOrderPaypalExpedition;
  /**
   * Order special informations
   */
  query: string | null;
  /**
   * Webshop ID
   */
  webshopId: string;
  /**
   * order ID
   */
  _id: string;
  /**
   * cart payment
   */
  payment: ConfirmOrderPaypalConfirmOrderPaypalPayment;
  /**
   * Order status
   */
  status: string;
}

export interface ConfirmOrderPaypal {
  confirmOrderPaypal: ConfirmOrderPaypalConfirmOrderPaypal;
}

export interface ConfirmOrderPaypalVariables {
  profile: string;
  orderId: string;
  payment: PaymentInput;
}
