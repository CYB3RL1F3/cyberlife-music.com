import type { ClientOnlyProps } from './ClientOnly.types';
import { useHydrated } from '~/hooks/misc/useHydrated';

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
}
