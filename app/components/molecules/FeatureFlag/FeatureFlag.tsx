import { useFeatureFlagQuery } from '~/hooks/queries/useFeatureFlagQuery';

import type { FeatureFlagProps } from './FeatureFlag.types';

const FeatureFlag = ({ id, children, fallback = null }: FeatureFlagProps) => {
  const { data, loading } = useFeatureFlagQuery(id);

  if (!data && loading) return null;
  if (!data?.featureFlag?.isActive && !loading) return fallback;
  return children;
};

export default FeatureFlag;
