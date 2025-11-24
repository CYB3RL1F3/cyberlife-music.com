import type { Routes } from '~/routes/routes';

export const getCurrentRouteIndex = (
  routes: readonly Routes[],
  currentRoute: string,
) => {
  if (currentRoute === '/')
    return routes.findIndex((route) => route === currentRoute);
  const routeIndex = routes.findIndex(
    (route) => route !== '/' && currentRoute.includes(route),
  );
  return routeIndex;
};
