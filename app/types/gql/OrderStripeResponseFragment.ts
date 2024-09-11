/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderStripeResponseFragment
// ====================================================

export interface OrderStripeResponseFragmentOrderCartItems {
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

export interface OrderStripeResponseFragmentOrderCart {
  __typename: "Cart";
  /**
   * product id
   */
  items: OrderStripeResponseFragmentOrderCartItems[];
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

export interface OrderStripeResponseFragmentOrderExpeditionAddress {
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

export interface OrderStripeResponseFragmentOrderExpedition {
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
  address: OrderStripeResponseFragmentOrderExpeditionAddress;
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

export interface OrderStripeResponseFragmentOrderPayment {
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

export interface OrderStripeResponseFragmentOrder {
  __typename: "Order";
  /**
   * product id
   */
  cart: OrderStripeResponseFragmentOrderCart;
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
  expedition: OrderStripeResponseFragmentOrderExpedition;
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
  payment: OrderStripeResponseFragmentOrderPayment;
  /**
   * paid
   */
  paid: boolean;
  /**
   * Order status
   */
  status: string;
}

export interface OrderStripeResponseFragmentPaymentIntent {
  __typename: "StripeResponse";
  /**
   * Status
   */
  status: string;
  /**
   * Intent
   */
  intent: any;
}

export interface OrderStripeResponseFragment {
  __typename: "OrderStripeResponse";
  /**
   * ID
   */
  order: OrderStripeResponseFragmentOrder;
  /**
   * Intent
   */
  paymentIntent: OrderStripeResponseFragmentPaymentIntent;
}
