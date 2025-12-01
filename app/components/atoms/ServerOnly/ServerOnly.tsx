import { useHydrated } from '~/hooks/misc/useHydrated';

import type { ServerOnlyProps } from './ServerOnly.types';

export function ServerOnly({ children, fallback = null }: ServerOnlyProps) {
  return !useHydrated() ? <>{children()}</> : <>{fallback}</>;
}

export default ServerOnly;
