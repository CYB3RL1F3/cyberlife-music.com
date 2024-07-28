/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Environment } from "./globalTypes";

// ====================================================
// GraphQL query operation: FeatureFlagQuery
// ====================================================

export interface FeatureFlagQueryFeatureFlag {
  __typename: "FeatureFlag";
  /**
   * Feature flag name
   */
  flag: string | null;
  isActive: boolean;
}

export interface FeatureFlagQuery {
  featureFlag: FeatureFlagQueryFeatureFlag;
}

export interface FeatureFlagQueryVariables {
  profile: string;
  environment: Environment;
  id: string;
}
