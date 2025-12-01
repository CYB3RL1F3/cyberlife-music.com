import { gql } from '@apollo/client';

import autocompleteLocation from '~/gql/queries/autocompleteLocations.gql';
import autocompleteLocationFragment from '~/gql/fragments/autocompleteLocation.gql';
import { runQuery } from '~/utils/graphql';
import {
  AutoCompleteLocationsQuery,
  AutoCompleteLocationsQueryVariables,
} from '~/types/gql';

export const autocompleteLocationsQueryGql = gql`
  ${autocompleteLocationFragment}
  ${autocompleteLocation}
`;

export const runAutocompleteLocationQuery = (
  payload: AutoCompleteLocationsQueryVariables,
) => {
  return runQuery<
    AutoCompleteLocationsQuery,
    AutoCompleteLocationsQueryVariables
  >(autocompleteLocationsQueryGql, payload);
};
