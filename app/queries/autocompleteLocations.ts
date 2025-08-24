import { gql } from '@apollo/client';
import autocompleteLocation from '~/gql/queries/autocompleteLocations.gql';
import autocompleteLocationFragment from '~/gql/fragments/autocompleteLocation.gql';
import type { AutocompleteLocation } from '~/types/gql/AutocompleteLocation';
import { runQuery } from '~/utils/graphql';
import { AutocompleteLocationSuggestionInput } from '~/types/gql/globalTypes';

export const autocompleteLocationsGql = gql`
  ${autocompleteLocationFragment}
  ${autocompleteLocation}
`;

export const runAutocompleteLocationQuery = (
  payload: AutocompleteLocationSuggestionInput,
) => {
  return runQuery<AutocompleteLocation, AutocompleteLocationSuggestionInput>(
    autocompleteLocationsGql,
    payload,
  );
};
