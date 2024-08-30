/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCustomerDto } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface RegisterRegisterCustomer {
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

export interface RegisterRegister {
  __typename: "AuthenticatedCustomerEntity";
  /**
   * profile 
   */
  customer: RegisterRegisterCustomer;
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

export interface Register {
  register: RegisterRegister;
}

export interface RegisterVariables {
  profile: string;
  customer: CreateCustomerDto;
}
