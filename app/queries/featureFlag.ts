import { gql } from "@apollo/client";
import { profile } from "~/config";
import featureFlagQuery from "~/gql/queries/featureFlag.gql";
import featureFlagFragment from "~/gql/fragments/featureFlag.gql";
import type {
  FeatureFlagQuery,
  FeatureFlagQueryVariables
} from "~/types/gql/FeatureFlagQuery";
import { runQuery } from "~/utils/graphql";
import { getConfig } from "~/utils/config";
import { Environment } from "~/types/gql/globalTypes";

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
      environment: getConfig()?.env || Environment.prod
    }
  );
};
