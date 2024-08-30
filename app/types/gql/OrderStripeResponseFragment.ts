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
  trackingNumber: string;
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

export interface OrderStripeResponseFragmentOrderCustomer {
  __typename: "CustomerEntity";
  /**
   * User id
   */
  userId: string | null;
  /**
   * User firstname
   */
  firstName: string | null;
  /**
   * User lastname
   */
  lastName: string | null;
  /**
   * User email
   */
  email: string | null;
  /**
   * User birthday
   */
  birthday: Any | null;
  /**
   * User orderHistory
   */
  orderHistory: string | null;
  /**
   * User subtitle
   */
  subtitle: string | null;
  /**
   * User confirmed email
   */
  confirmedEmail: boolean | null;
  /**
   * User ID
   */
  _id: string | null;
  /**
   * User creation date
   */
  createdAt: Any | null;
  /**
   * User update date
   */
  updatedAt: Any | null;
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
  transactionDate: Any;
}

export interface OrderStripeResponseFragmentOrder {
  __typename: "Order";
  /**
   * product id
   */
  cart: OrderStripeResponseFragmentOrderCart;
  /**
   * Customer id
   */
  customerId: string;
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
   * Customer
   */
  customer: OrderStripeResponseFragmentOrderCustomer;
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
  intent: Any;
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
