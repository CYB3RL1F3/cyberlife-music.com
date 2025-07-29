import { json2xml, Options } from 'xml-js';
import dayjs from 'dayjs';

const defaultOptions = { compact: true, ignoreComment: true, spaces: 4 };

export type RSSItem = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
  guid?: ReturnType<typeof getField>;
  author?: string;
  category?: string | string[];
  content?: string;
  enclosure?: {
    _attributes: {
      url: string;
      type: string;
      length?: number;
    };
  };
  [`xhtml:link`]?: {
    rel: 'alternate';
    hreflang?: string;
    href: string;
  };
};

export type RSS = {
  title: string;
  description: string;
  link?: string;
  item: RSSItem[];
  id: string;
  atomLink: string;
  contact?: string;
  image: {
    url: string;
    title: string;
    link: string;
  };
  options?: Options.JS2XML;
};

export const rssDateFormat = 'ddd, DD MMM YYYY HH:mm:ss ZZ';

export const cleanUrl = (url: string) => {
  return decodeURIComponent(encodeURIComponent(url));
};

export const getField = <
  T extends Record<string, string | boolean | number | null>,
  U extends
    | Record<string, string | boolean | number | null>
    | string
    | number
    | boolean
    | null,
>(
  content: U,
  attributes: T,
) => {
  if (typeof content === 'object' && content !== null) {
    return {
      _attributes: attributes,
      ...content,
    };
  }
  return {
    _attributes: attributes,
    _text: content,
  };
};

export const rssGenerator = ({
  title = 'Cyberlife Music RSS Feed',
  description = "Cyberlife Music's podcast and Releases",
  link = 'https://cyberlife-music.com',
  contact,
  item,
  image,
  atomLink,
  options: opts,
}: RSS) => {
  const options = {
    ...defaultOptions,
    ...opts,
  };
  console.log({
    'atom:link': {
      rel: 'self',
      href: atomLink,
    },
  });
  const rss = {
    rss: {
      _attributes: {
        version: '2.0',
      },
      channel: {
        title,
        description,
        image,
        link,
        language: 'en-US',
        webMaster: contact || 'contact@cyberlife-music.com',
        lastBuildDate: dayjs().format(rssDateFormat),
        pubDate: dayjs().format(rssDateFormat),
        item,
      },
    },
  };
  return json2xml(JSON.stringify(rss), options);
};
