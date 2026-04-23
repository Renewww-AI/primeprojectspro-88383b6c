import { TOKENS, TokenName, composite, hslToRgb } from "./tokens";

/** sRGB channel (0-1) → linearized luminance channel. */
function lin(c: number): number {
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function relativeLuminance([r, g, b]: [number, number, number]): number {
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrastRatio(
  a: [number, number, number],
  b: [number, number, number],
): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [light, dark] = la >= lb ? [la, lb] : [lb, la];
  return (light + 0.05) / (dark + 0.05);
}

export type Pair = {
  page: string;
  where: string;
  fg: TokenName;
  bg: TokenName;
  /** Foreground alpha (e.g. text-primary-foreground/85 → 0.85). */
  fgAlpha?: number;
  /** "large" = ≥18pt or ≥14pt bold (UI titles, hero headings). */
  size?: "normal" | "large";
};

export type AuditResult = Pair & {
  ratio: number;
  required: number;
  pass: boolean;
};

/**
 * Curated inventory of every meaningful text-on-background combination
 * rendered across the site. Add entries when you introduce new
 * foreground/background pairings — the suite will fail until they meet WCAG AA.
 */
export const PAIRS: Pair[] = [
  // ---------- Global / shared ----------
  { page: "global", where: "body text", fg: "foreground", bg: "background" },
  { page: "global", where: "card body", fg: "card-foreground", bg: "card" },
  { page: "global", where: "muted helper text on card", fg: "muted-foreground", bg: "card" },
  { page: "global", where: "muted helper text on stone-bg", fg: "muted-foreground", bg: "stone-bg" },
  { page: "global", where: "primary button label", fg: "primary-foreground", bg: "primary", size: "large" },
  { page: "global", where: "olive link on card", fg: "olive", bg: "card" },
  { page: "global", where: "olive link on stone-bg", fg: "olive", bg: "stone-bg" },
  { page: "global", where: "brass eyebrow on card", fg: "brass", bg: "card" },
  { page: "global", where: "brass eyebrow on stone-bg", fg: "brass", bg: "stone-bg" },

  // ---------- Hero / dark sections ----------
  // Hero overlay is gradient over an image. Worst-case background ≈ near-black/55.
  // We model it as primary-foreground composited onto near-black (the dominant
  // overlay color). Subtext uses /95 alpha after the contrast pass.
  { page: "hero/sub-page hero", where: "hero H1", fg: "primary-foreground", bg: "near-black", size: "large" },
  { page: "hero/sub-page hero", where: "hero subtext (95% alpha)", fg: "primary-foreground", bg: "near-black", fgAlpha: 0.95 },
  { page: "hero/sub-page hero", where: "eyebrow over dark hero", fg: "brass-bright", bg: "near-black" },

  // ---------- Process section (dark olive bg) ----------
  { page: "ProcessSection", where: "headline on olive", fg: "primary-foreground", bg: "olive", size: "large" },
  { page: "ProcessSection", where: "body (95% alpha) on olive", fg: "primary-foreground", bg: "olive", fgAlpha: 0.95 },
  { page: "ProcessSection", where: "eyebrow numerals on olive", fg: "brass-bright", bg: "olive" },

  // ---------- FinalCta (dark olive bg) ----------
  { page: "FinalCta", where: "headline on olive", fg: "primary-foreground", bg: "olive", size: "large" },
  { page: "FinalCta", where: "subtext (95% alpha) on olive", fg: "primary-foreground", bg: "olive", fgAlpha: 0.95 },

  // ---------- Card image overlays ----------
  // FeaturedProjects bottom location pill: near-black/75 over image → near-black/75 over near-black worst case
  { page: "FeaturedProjects", where: "location pill on image", fg: "primary-foreground", bg: "near-black", fgAlpha: 1 },
  // FeaturedProjects top badge (light pill on image)
  { page: "FeaturedProjects", where: "top badge on image (light pill)", fg: "charcoal", bg: "card" },
  // Hover overlay text — overlay is near-black/65, text fully opaque
  { page: "FeaturedProjects", where: "hover overlay copy", fg: "primary-foreground", bg: "near-black" },

  // ---------- Blog ----------
  { page: "Blog", where: "Community badge on image", fg: "primary-foreground", bg: "near-black" },
  { page: "Blog", where: "card title", fg: "charcoal", bg: "card", size: "large" },
  { page: "Blog", where: "card preview text", fg: "muted-foreground", bg: "card" },
  { page: "Blog", where: "category eyebrow", fg: "brass", bg: "card" },
  { page: "Blog", where: "Showing Community Posts pill", fg: "charcoal", bg: "stone-alt" },

  // ---------- Locations / ServiceGrid (light cards) ----------
  { page: "ServiceGrid", where: "card title", fg: "charcoal", bg: "card", size: "large" },
  { page: "LocationsSection", where: "card title on stone-bg", fg: "charcoal", bg: "stone-bg", size: "large" },
  { page: "LocationsSection", where: "card desc on stone-bg", fg: "muted-foreground", bg: "stone-bg" },
];

export function audit(pairs: Pair[] = PAIRS): AuditResult[] {
  return pairs.map((p) => {
    const fgRgb = p.fgAlpha != null && p.fgAlpha < 1
      ? composite(p.fg, p.bg, p.fgAlpha)
      : hslToRgb(TOKENS[p.fg]);
    const bgRgb = hslToRgb(TOKENS[p.bg]);
    const ratio = contrastRatio(fgRgb, bgRgb);
    const required = p.size === "large" ? 3.0 : 4.5;
    return { ...p, ratio, required, pass: ratio >= required };
  });
}
