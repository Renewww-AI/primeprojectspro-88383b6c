import DOMPurify from "dompurify";

// Whitelist tags/attrs that the rich text editor actually emits.
const ALLOWED_TAGS = [
  "p", "br", "strong", "em", "u", "s", "blockquote",
  "h1", "h2", "h3", "h4", "ul", "ol", "li",
  "a", "img", "figure", "figcaption", "code", "pre", "hr", "span",
];
const ALLOWED_ATTR = ["href", "target", "rel", "src", "alt", "title", "class"];

export function sanitizeHtml(html: string): string {
  if (typeof window === "undefined") {
    // Defensive fallback for SSR — strip script/style/iframe and on* attrs.
    return html
      .replace(/<\/?(script|style|iframe|object|embed)[^>]*>/gi, "")
      .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/javascript:/gi, "");
  }
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form"],
    FORBID_ATTR: ["style", "onerror", "onload", "onclick"],
  });
}
