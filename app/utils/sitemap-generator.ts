import { json2xml, Options } from 'xml-js';

export type Path = {
  loc: string;
  lastMod?: boolean | string;
  changeFreq?: 'hourly' | 'daily' | 'monthly';
  priority?: number;
  [`atom:link`]?: {
    rel: 'alternate';
    hreflang?: string;
    href: string;
  };
};

const defaultOptions = { compact: true, ignoreComment: true, spaces: 4 };

export const sitemapGenerator = (paths: Path[], opts?: Options.JS2XML) => {
  const options = {
    ...defaultOptions,
    ...opts,
  };
  const sitemap = {
    urlset: {
      _attributes: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      },
      url: paths,
    },
  };
  return json2xml(JSON.stringify(sitemap), options);
};
