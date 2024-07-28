/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Environment {
  dev = "dev",
  prod = "prod",
  staging = "staging",
}

export interface ContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubscriptionDto {
  endpoint?: string | null;
  keys?: SubscriptionKeys | null;
}

export interface SubscriptionKeys {
  auth?: string | null;
  p256dh?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
