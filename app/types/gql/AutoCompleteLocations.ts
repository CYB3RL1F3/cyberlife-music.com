/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AutocompleteLocationSuggestionInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: AutoCompleteLocations
// ====================================================

export interface AutoCompleteLocationsAutocompleteLocationsSuggestions {
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

export interface AutoCompleteLocationsAutocompleteLocations {
  __typename: "AutocompleteLocationEntity";
  /**
   * suggestions
   */
  suggestions: AutoCompleteLocationsAutocompleteLocationsSuggestions[];
}

export interface AutoCompleteLocations {
  autocompleteLocations: AutoCompleteLocationsAutocompleteLocations;
}

export interface AutoCompleteLocationsVariables {
  payload: AutocompleteLocationSuggestionInput;
}
