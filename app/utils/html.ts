import reactHtmlParser from "html-react-parser";
import DOMPurify from "dompurify";

export const getSanitizedHtml = (
  html: string,
  strict: boolean = false
): string =>
  DOMPurify.sanitize(html, {
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
