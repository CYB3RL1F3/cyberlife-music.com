# cyberlife-music.com

The source code of my website, created to expose all informations about my musical world (podcasts, releases, infos like gigs, videos...) is available on github as a demonstration of an application developed with Typescript + React Remix + Tailwind CSS.
The website is now online and works with my profilart application for data provision.

## Technical stack

- [Typescript](https://www.typescriptlang.org/) 4.9.4
- [React](https://facebook.github.io/react/) 18.2.0
- [React Remix](https://remix.run/) 1.9.0
- [Tailwind CSS](https://tailwindcss.com/) 3.2.4
- [Framer Motion](https://www.framer.com/motion/) 8.0.2
- [GraphQL Apollo Client](https://www.apollographql.com/docs/react/) 2.34.0
- [React Hooks Form](https://github.com/mobxjs/mobx-react) 2.0.1
- [Superstruct](https://github.com/alisd23/mobx-react-router/) 1.0.3
- [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/guides/) 2.11.1

## Architecture

Application is based on [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) architecture. Each component is designed with a (very) fine granularity to be reusable and match with SOLID principles (single responsibility, closed to modifications / open to extension, dependencies inversions principle...).

Application is also based on [presentational/container design pattern](https://www.patterns.dev/posts/presentational-container-pattern/). Each view is separated from logic (API calls, interactions with contexts, with audio player, etc...).

Almost every component is "home-made", even the carousel.

Application is based on React Remix, a very innovative React-based SSR framework.

A particular focus is constantly made on performance, SEO and good practices as well.

### Coming up next

- Set up some E2E tests
- Replace IDs by slugs
- A web radio project :)
- A collective music art project :)
