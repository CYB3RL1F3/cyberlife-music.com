import type { ServerOnlyProps } from "./ServerOnly.types";
import { useHydrated } from "~/hooks/useHydrated";

export function ServerOnly({ children, fallback = null }: ServerOnlyProps) {
  return !useHydrated() ? <>{children()}</> : <>{fallback}</>;
}

export default ServerOnly;
