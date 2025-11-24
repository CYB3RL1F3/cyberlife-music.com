/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AutocompleteLocation
// ====================================================

export interface AutocompleteLocationSuggestions {
  __typename: "AutocompleteLocationSuggestion";
  /**
   * zipcode
   */
  zipcode: string;
  /**
   * city
   */
  city: string;
  /**
   * country
   */
  country: string;
  /**
   * country code
   */
  countryCode: string;
}

export interface AutocompleteLocation {
  __typename: "AutocompleteLocationEntity";
  /**
   * suggestions
   */
  suggestions: AutocompleteLocationSuggestions[];
}
