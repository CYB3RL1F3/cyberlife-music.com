import { useQuery } from '@apollo/client/react';

import { profile } from '~/config';
import { featureFlagGqlQuery } from '~/queries/featureFlag';
import { FeatureFlagQuery, FeatureFlagQueryVariables } from '~/types/gql';
import { Environment } from '~/types/gql';
import { getConfig } from '~/utils/config';

export const useFeatureFlagQuery = (id: string) => {
  return useQuery<FeatureFlagQuery, FeatureFlagQueryVariables>(
    featureFlagGqlQuery,
    {
      variables: {
        profile,
        id,
        environment: getConfig()?.env || Environment.Prod,
      },
    },
  );
};
