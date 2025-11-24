import { useQuery } from '@apollo/client/react';
import { profile } from '~/config';
import { featureFlagGqlQuery } from '~/queries/featureFlag';
import type {
  FeatureFlagQuery,
  FeatureFlagQueryVariables,
} from '~/types/gql/FeatureFlagQuery';
import { Environment } from '~/types/gql/globalTypes';
import { getConfig } from '~/utils/config';

export const useFeatureFlagQuery = (id: string) => {
  return useQuery<FeatureFlagQuery, FeatureFlagQueryVariables>(
    featureFlagGqlQuery,
    {
      variables: {
        profile,
        id,
        environment: getConfig()?.env || Environment.prod,
      },
    },
  );
};
