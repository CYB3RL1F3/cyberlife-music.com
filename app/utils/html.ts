import reactHtmlParser from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";

export const getSanitizedHtml = (
  html: string,
  strict: boolean = false
): string =>
  sanitize(html, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "p",
      !strict ? "a" : null,
      "ul",
      "ol",
      "nl",
      "li",
      "b",
      "i",
      "u",
      "strong",
      "em",
      "strike",
      "code",
      "hr",
      "br",
      "div",
      "table",
      "thead",
      "caption",
      "tbody",
      "article",
      "section",
      "aside",
      "tr",
      "th",
      "td",
      "pre",
      "cite",
      !strict ? "video" : null,
      !strict ? "source" : null,
      !strict ? "img" : null
    ].filter((d) => !!d) as string[],
    ALLOWED_ATTR: strict
      ? ["style"]
      : [
          "href",
          "name",
          "target",
          "rel",
          "class",
          "cite",
          "type",
          "src",
          "alt",
          "width",
          "height",
          "style",
          "controls",
          "muted"
        ]
    // allowedSchemes: ["http", "https", "ftp", "mailto"]
  });

export const parseHtml = (html: string) =>
  reactHtmlParser(getSanitizedHtml(html));

export const toHtml = (html: string, className?: string) => {
  return html
    .replace(
      /(https?:\/\/(?:www\.|(?!www) | (bit.ly))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gim,
      `<a ${
        className ? `class="${className}"` : ""
      } rel="external nofollow" target="_blank" href="$1">$1</a>`
    )
    .replace('href="www', 'href="https://www')
    .replace('href="bit.ly', 'href="https://bit.ly')
    .replace(/(\n)/g, "<br />");
};
