/**
 * Single source of truth for design-token color values used by the contrast
 * audit. Values mirror `:root` in src/index.css. If a token changes there,
 * update it here and the audit will re-validate every page combination.
 */
export type Hsl = { h: number; s: number; l: number };

export const TOKENS = {
  background: { h: 39, s: 25, l: 94 },
  foreground: { h: 60, s: 8, l: 10 },
  card: { h: 0, s: 0, l: 100 },
  "card-foreground": { h: 60, s: 8, l: 10 },
  primary: { h: 60, s: 18, l: 14 },
  "primary-foreground": { h: 39, s: 25, l: 96 },
  secondary: { h: 39, s: 22, l: 90 },
  "secondary-foreground": { h: 60, s: 8, l: 10 },
  muted: { h: 39, s: 18, l: 90 },
  "muted-foreground": { h: 30, s: 5, l: 40 },
  accent: { h: 60, s: 18, l: 14 },
  "accent-foreground": { h: 39, s: 25, l: 96 },
  border: { h: 36, s: 15, l: 85 },
  olive: { h: 60, s: 18, l: 14 },
  "olive-dark": { h: 60, s: 22, l: 9 },
  charcoal: { h: 60, s: 8, l: 10 },
  brass: { h: 36, s: 32, l: 38 },
  taupe: { h: 33, s: 22, l: 80 },
  "near-black": { h: 60, s: 10, l: 6 },
  "stone-bg": { h: 39, s: 25, l: 94 },
  "stone-alt": { h: 39, s: 22, l: 90 },
  "brass-bright": { h: 36, s: 45, l: 65 }, // matches inline [hsl(36_45%_65%)] used for eyebrows on dark heros
} as const satisfies Record<string, Hsl>;

export type TokenName = keyof typeof TOKENS;

/** Convert HSL (with s,l as 0-100 percentages) to sRGB 0-1. */
export function hslToRgb({ h, s, l }: Hsl): [number, number, number] {
  const sN = s / 100;
  const lN = l / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const hPrime = h / 60;
  const x = c * (1 - Math.abs((hPrime % 2) - 1));
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (hPrime >= 0 && hPrime < 1) [r1, g1, b1] = [c, x, 0];
  else if (hPrime < 2) [r1, g1, b1] = [x, c, 0];
  else if (hPrime < 3) [r1, g1, b1] = [0, c, x];
  else if (hPrime < 4) [r1, g1, b1] = [0, x, c];
  else if (hPrime < 5) [r1, g1, b1] = [x, 0, c];
  else [r1, g1, b1] = [c, 0, x];
  const m = lN - c / 2;
  return [r1 + m, g1 + m, b1 + m];
}

/** Composite a foreground token with `alpha` over a solid background token. */
export function composite(
  fg: TokenName,
  bg: TokenName,
  alpha = 1,
): [number, number, number] {
  const [fr, fg2, fb] = hslToRgb(TOKENS[fg]);
  const [br, bg3, bb] = hslToRgb(TOKENS[bg]);
  return [
    fr * alpha + br * (1 - alpha),
    fg2 * alpha + bg3 * (1 - alpha),
    fb * alpha + bb * (1 - alpha),
  ];
}
