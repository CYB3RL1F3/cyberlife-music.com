import reactHtmlParser from 'html-react-parser';
import { sanitize } from 'isomorphic-dompurify';

export const getSanitizedHtml = (
  html: string,
  strict: boolean = false,
): string =>
  sanitize(html, {
    ALLOWED_TAGS: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      !strict ? 'a' : null,
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'u',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'article',
      'section',
      'aside',
      'tr',
      'th',
      'td',
      'pre',
      'cite',
      !strict ? 'video' : null,
      !strict ? 'source' : null,
      !strict ? 'img' : null,
    ].filter((d) => !!d) as string[],
    ALLOWED_ATTR: strict
      ? ['style']
      : [
          'href',
          'name',
          'target',
          'rel',
          'class',
          'cite',
          'type',
          'src',
          'alt',
          'width',
          'height',
          'style',
          'controls',
          'muted',
        ],
    // allowedSchemes: ["http", "https", "ftp", "mailto"]
  });

export const parseHtml = (html: string) =>
  reactHtmlParser(getSanitizedHtml(html));

export const toHtml = (html: string, className?: string) => {
  const urlRegex = /(?:https?:\/\/)?[\da-z\.-]+\.[a-z\.]{2,6}[\/\w \.-]*\/?/gim;

  return html
    .replace(urlRegex, (match) => {
      let url = match;

      if (
        match.startsWith('http://') ||
        (!match.startsWith('http') && !match.startsWith('ftp'))
      ) {
        url = 'https://' + match.replace('http://', '');
      }

      return `<a ${
        className ? `class="${className}"` : ''
      } rel="external nofollow" target="_blank" href="${url}">${url}</a>`;
    })
    .replace(/\n/gim, '<br />');
};

export const getTextToHtml = (value: string, className?: string) =>
  parseHtml(toHtml(value, className));
