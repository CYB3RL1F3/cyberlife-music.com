import { json2xml, Options } from 'xml-js';
import dayjs from 'dayjs';

const defaultOptions = { compact: true, ignoreComment: true, spaces: 4 };

export type RSSItem = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
  guid?: string;
  author?: string;
  category?: string | string[];
  content?: string;
  enclosure?: {
    url: string;
    length?: number;
    type?: string;
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
  contact?: string;
  options?: Options.JS2XML;
};

export const rssGenerator = ({
  title = 'Cyberlife Music RSS Feed',
  description = "Cyberlife Music's podcast and Releases",
  link = 'https://cyberlife-music.com',
  contact,
  item,
  options: opts,
}: RSS) => {
  const options = {
    ...defaultOptions,
    ...opts,
  };
  const rss = {
    rss: {
      _attributes: {
        version: '2.0',
      },
      channel: {
        title,
        description,
        link,
        language: 'en-US',
        webmaster: contact || 'contact@cyberlife-music.com',
        lastBuildDate: dayjs().format(),
        pubDate: dayjs().format(),
        item,
      },
    },
  };
  return json2xml(JSON.stringify(rss), options);
};
