import { useQuery } from '@apollo/client';
import type { AutoCompleteLocationsVariables } from '~/types/gql/AutoCompleteLocations';
import { autocompleteLocationsGql } from '~/queries/autocompleteLocations';
import { AutoCompleteLocations } from '~/types/gql/AutoCompleteLocations';

export const useAutocompleteLocationQuery = (
  payload: AutoCompleteLocationsVariables['payload'],
  enabled?: boolean,
) => {
  return useQuery<AutoCompleteLocations, AutoCompleteLocationsVariables>(
    autocompleteLocationsGql,
    {
      variables: {
        payload,
      },
      skip: !enabled,
    },
  );
};
