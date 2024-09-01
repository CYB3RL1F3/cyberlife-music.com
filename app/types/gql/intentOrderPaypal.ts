/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderDto } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: IntentOrderPaypal
// ====================================================

export interface IntentOrderPaypalIntentOrderPaypalOrderCartItems {
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

export interface IntentOrderPaypalIntentOrderPaypalOrderCart {
  __typename: "Cart";
  /**
   * product id
   */
  items: IntentOrderPaypalIntentOrderPaypalOrderCartItems[];
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

export interface IntentOrderPaypalIntentOrderPaypalOrderExpeditionAddress {
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

export interface IntentOrderPaypalIntentOrderPaypalOrderExpedition {
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
  address: IntentOrderPaypalIntentOrderPaypalOrderExpeditionAddress;
  /**
   * email for order
   */
  email: string;
  /**
   * phone number
   */
  phone: number;
  /**
   * amount ttc
   */
  amountWithTax: number;
  /**
   * amount ttc
   */
  vat: number;
}

export interface IntentOrderPaypalIntentOrderPaypalOrderPayment {
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
  transactionDate: Any;
}

export interface IntentOrderPaypalIntentOrderPaypalOrder {
  __typename: "Order";
  /**
   * product id
   */
  cart: IntentOrderPaypalIntentOrderPaypalOrderCart;
  /**
   * Order date
   */
  orderAt: Any;
  /**
   * Order update date
   */
  updatedAt: Any;
  /**
   * Order expedition
   */
  expedition: IntentOrderPaypalIntentOrderPaypalOrderExpedition;
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
  payment: IntentOrderPaypalIntentOrderPaypalOrderPayment;
  /**
   * paid
   */
  paid: boolean;
  /**
   * Order status
   */
  status: string;
}

export interface IntentOrderPaypalIntentOrderPaypalPaymentIntentIntentLinks {
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

export interface IntentOrderPaypalIntentOrderPaypalPaymentIntentIntent {
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
  links: IntentOrderPaypalIntentOrderPaypalPaymentIntentIntentLinks[];
}

export interface IntentOrderPaypalIntentOrderPaypalPaymentIntent {
  __typename: "PaypalResponse";
  /**
   * Intent
   */
  intent: IntentOrderPaypalIntentOrderPaypalPaymentIntentIntent;
  /**
   * Status
   */
  status: number;
}

export interface IntentOrderPaypalIntentOrderPaypal {
  __typename: "OrderPaypalResponse";
  /**
   * ID
   */
  order: IntentOrderPaypalIntentOrderPaypalOrder;
  /**
   * Intent
   */
  paymentIntent: IntentOrderPaypalIntentOrderPaypalPaymentIntent;
}

export interface IntentOrderPaypal {
  intentOrderPaypal: IntentOrderPaypalIntentOrderPaypal;
}

export interface IntentOrderPaypalVariables {
  profile: string;
  order: OrderDto;
}
