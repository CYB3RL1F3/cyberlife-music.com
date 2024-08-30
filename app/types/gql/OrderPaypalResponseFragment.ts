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
  address: OrderPaypalResponseFragmentOrderExpeditionAddress;
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

export interface OrderPaypalResponseFragmentOrderCustomer {
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
  transactionDate: Any;
}

export interface OrderPaypalResponseFragmentOrder {
  __typename: "Order";
  /**
   * product id
   */
  cart: OrderPaypalResponseFragmentOrderCart;
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
   * Customer
   */
  customer: OrderPaypalResponseFragmentOrderCustomer;
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
