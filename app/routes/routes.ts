export const routes = [
  "/",
  "/podcasts/:id",
  "/releases",
  "/releases/:id",
  "/gigs",
  "/gigs/:id",
  "/contact"
] as const;

export type Routes = typeof routes[number];
