import { useQuery } from '@apollo/client/react';

import { autocompleteLocationsQueryGql } from '~/queries/autocompleteLocations';
import {
  AutoCompleteLocationsQuery,
  AutoCompleteLocationsQueryVariables,
} from '~/types/gql';

export const useAutocompleteLocationQuery = (
  payload: AutoCompleteLocationsQueryVariables['payload'],
  enabled?: boolean,
) => {
  return useQuery<
    AutoCompleteLocationsQuery,
    AutoCompleteLocationsQueryVariables
  >(autocompleteLocationsQueryGql, {
    variables: {
      payload,
    },
    skip: !enabled,
  });
};
