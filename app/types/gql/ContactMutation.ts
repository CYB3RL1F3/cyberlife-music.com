/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactDto } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ContactMutation
// ====================================================

export interface ContactMutation {
  contact: boolean;
}

export interface ContactMutationVariables {
  profile: string;
  message: ContactDto;
}
