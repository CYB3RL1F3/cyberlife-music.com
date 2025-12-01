import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { SummaryQuery, SummaryQueryVariables } from '~/types/gql';
import { summaryGqlQuery } from '~/queries/summary';
import { SummaryVariables } from '~/queries/summary';

export const useSummaryQuery = (variables: SummaryVariables) => {
  return useQuery<SummaryQuery, SummaryQueryVariables>(summaryGqlQuery, {
    variables: {
      profile,
      ...variables,
    },
  });
};
