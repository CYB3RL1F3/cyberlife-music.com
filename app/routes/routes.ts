export const routes = [
  '/podcasts',
  '/podcasts/:id',
  '/releases',
  '/releases/:id',
  '/events',
  '/events/:id',
  '/videos',
  '/videos/:id',
  '/contact',
  '/checkout',
] as const;

export type Routes = (typeof routes)[number];
