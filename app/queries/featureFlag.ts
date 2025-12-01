import { gql } from '@apollo/client';

import { profile } from '~/config';
import featureFlagQuery from '~/gql/queries/featureFlag.gql';
import featureFlagFragment from '~/gql/fragments/featureFlag.gql';
import { runQuery } from '~/utils/graphql';
import { getConfig } from '~/utils/config';
import { Environment } from '~/types/gql';
import { FeatureFlagQuery, FeatureFlagQueryVariables } from '~/types/gql';

export const featureFlagGqlQuery = gql`
  ${featureFlagFragment}
  ${featureFlagQuery}
`;

export const runFeatureFlagQuery = (id: string) => {
  return runQuery<FeatureFlagQuery, FeatureFlagQueryVariables>(
    featureFlagGqlQuery,
    {
      profile,
      id,
      environment: getConfig()?.env || Environment.Prod,
    },
  );
};
