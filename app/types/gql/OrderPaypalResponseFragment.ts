/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderPaypalResponseFragment
// ====================================================

export interface OrderPaypalResponseFragmentOrderCartItems {
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

export interface OrderPaypalResponseFragmentOrderCart {
  __typename: "Cart";
  /**
   * product id
   */
  items: OrderPaypalResponseFragmentOrderCartItems[];
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

export interface OrderPaypalResponseFragmentOrderExpeditionAddress {
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

export interface OrderPaypalResponseFragmentOrderExpedition {
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
  address: OrderPaypalResponseFragmentOrderExpeditionAddress;
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

export interface OrderPaypalResponseFragmentOrderPayment {
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

export interface OrderPaypalResponseFragmentOrder {
  __typename: "Order";
  /**
   * product id
   */
  cart: OrderPaypalResponseFragmentOrderCart;
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
  expedition: OrderPaypalResponseFragmentOrderExpedition;
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
  payment: OrderPaypalResponseFragmentOrderPayment;
  /**
   * paid
   */
  paid: boolean;
  /**
   * Order status
   */
  status: string;
}

export interface OrderPaypalResponseFragmentPaymentIntentIntentLinks {
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

export interface OrderPaypalResponseFragmentPaymentIntentIntent {
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
  links: OrderPaypalResponseFragmentPaymentIntentIntentLinks[];
}

export interface OrderPaypalResponseFragmentPaymentIntent {
  __typename: "PaypalResponse";
  /**
   * Intent
   */
  intent: OrderPaypalResponseFragmentPaymentIntentIntent;
  /**
   * Status
   */
  status: number;
}

export interface OrderPaypalResponseFragment {
  __typename: "OrderPaypalResponse";
  /**
   * ID
   */
  order: OrderPaypalResponseFragmentOrder;
  /**
   * Intent
   */
  paymentIntent: OrderPaypalResponseFragmentPaymentIntent;
}
