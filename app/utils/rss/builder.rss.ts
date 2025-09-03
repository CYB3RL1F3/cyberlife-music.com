import { json2xml, Options } from 'xml-js';
import dayjs from 'dayjs';

const defaultOptions = {
  compact: true,
  ignoreComment: true,
  spaces: 4,
};

export type Attributes<T> = {
  _attributes: T;
};

export type RSSItem = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
  guid?: string;
  author?: string;
  category?: string | string[];
  content?: string;
  enclosure?: Attributes<{
    url: string;
    type: string;
    length?: number;
  }>;
  [`atom:link`]?: Attributes<{
    rel: 'alternate';
    hreflang?: string;
    href: string;
  }>;
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
  attributes?: Record<string, string>;
  extra?: Record<string, unknown>;
};

export const rssDateFormat = 'ddd, DD MMM YYYY HH:mm:ss ZZ';

export const cleanUrl = (url: string) => {
  return decodeURIComponent(encodeURIComponent(url));
};

export const cleanText = (text: string) => {
  return text
    .replace(/★/gim, '')
    .replace(/𓆟/gim, '')
    .replace(/&/gim, 'and')
    .replace(/</gim, '')
    .replace(/>/gim, '')
    .replace(/\s+/gim, ' ')
    .trim();
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

export const getContact = (config?: { contact?: string }) => {
  const email = config?.contact || 'contact@cyberlife-music.com';
  return `${email} (David Cyberlife)`;
};

const defaultContact = getContact();

export const buildRssFeed = ({
  title = 'Cyberlife Music RSS Feed',
  description = "Cyberlife Music's podcast and Releases",
  link = 'https://cyberlife-music.com',
  item,
  image,
  atomLink,
  contact = defaultContact,
  options: opts,
  attributes,
  extra,
}: RSS) => {
  const options = {
    ...defaultOptions,
    ...opts,
  };

  const rss = {
    rss: {
      _attributes: {
        version: '2.0',
        [`xmlns:atom`]: 'http://www.w3.org/2005/Atom',
        ...attributes,
      },
      channel: {
        title,
        description,
        image,
        link,
        language: 'en-US',
        webMaster: contact,
        lastBuildDate: dayjs().format(rssDateFormat),
        pubDate: dayjs().format(rssDateFormat),
        ...extra,
        [`atom:link`]: {
          _attributes: {
            rel: 'self',
            type: 'application/rss+xml',
            href: atomLink,
          },
        },
        item,
      },
    },
  };
  return json2xml(JSON.stringify(rss), options);
};
