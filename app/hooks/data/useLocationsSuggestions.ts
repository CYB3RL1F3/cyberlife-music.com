import { AutocompleteLocationSuggestionType } from '~/types/gql/globalTypes';
import { useAutocompleteLocationQuery } from '../queries/useAutocompleteLocationQuery';
import { useEffect, useState } from 'react';
import { AutocompleteLocation } from '~/types/gql/AutocompleteLocation';

export const useLocationsSuggestions = (
  country: string,
  query: string,
  type: AutocompleteLocationSuggestionType,
) => {
  const [cache, setCache] = useState<AutocompleteLocation['suggestions']>([]);
  const { data, loading, error } = useAutocompleteLocationQuery(
    {
      country,
      query,
      type,
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
