/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginDto } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface LoginLoginCustomer {
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

export interface LoginLogin {
  __typename: "AuthenticatedCustomerEntity";
  /**
   * profile 
   */
  customer: LoginLoginCustomer;
  /**
   * token
   */
  token: string;
  /**
   * authenticated
   */
  authenticated: boolean;
  _id: string;
}

export interface Login {
  login: LoginLogin;
}

export interface LoginVariables {
  credentials: LoginDto;
}
