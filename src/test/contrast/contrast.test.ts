import { describe, it, expect } from "vitest";
import { audit } from "./wcag";

/**
 * CI guardrail: any text/background combination registered in PAIRS must
 * meet WCAG AA (4.5:1 normal text, 3:1 large/UI). Adding a new color
 * combination on a page? Register it in src/test/contrast/wcag.ts so this
 * suite covers it — the build will fail if it slips below threshold.
 */
describe("WCAG AA contrast audit", () => {
  const results = audit();
  const failures = results.filter((r) => !r.pass);

  it("reports every registered pair", () => {
    expect(results.length).toBeGreaterThan(0);
  });

  it("has no contrast failures", () => {
    if (failures.length > 0) {
      const lines = failures.map(
        (f) =>
          `  ✗ [${f.page}] ${f.where} — ${f.fg}${f.fgAlpha != null ? `@${f.fgAlpha}` : ""} on ${f.bg}: ${f.ratio.toFixed(2)}:1 (need ${f.required}:1${f.size === "large" ? ", large" : ""})`,
      );
      throw new Error(
        `\n${failures.length} contrast failure(s):\n${lines.join("\n")}\n`,
      );
    }
    expect(failures).toEqual([]);
  });
});
