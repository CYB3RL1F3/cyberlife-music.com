import { useEffect, useState } from 'react';

import { useAutocompleteLocationQuery } from '~/hooks/queries/useAutocompleteLocationQuery';
import {
  AutocompleteLocationSuggestionType,
  type AutocompleteLocationEntity,
} from '~/types/gql';

export const useLocationsSuggestions = (
  country: string,
  query: string,
  type: AutocompleteLocationSuggestionType,
) => {
  const [cache, setCache] = useState<AutocompleteLocationEntity['suggestions']>(
    [],
  );
  const { data, loading, error } = useAutocompleteLocationQuery(
    {
      country,
      query,
      type,
      language: 'en',
      limit: 10,
    },
    query.length >= 2 && country.length > 0,
  );

  useEffect(() => {
    if (
      data?.autocompleteLocations?.suggestions?.length &&
      !loading &&
      !error
    ) {
      setCache(data.autocompleteLocations.suggestions);
    }
    if (!data?.autocompleteLocations?.suggestions?.length && !loading) {
      setCache([]);
    }
  }, [data, loading, error]);

  return cache;
};
