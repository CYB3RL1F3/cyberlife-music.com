export const routes = [
  "/",
  "/podcasts/:id",
  "/releases",
  "/releases/:id",
  "/events",
  "/events/:id",
  "/contact"
] as const;

export type Routes = typeof routes[number];
