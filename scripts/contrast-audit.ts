/**
 * Standalone contrast audit. Prints a per-page report and exits 1 on any
 * WCAG AA failure. Run with: `npm run audit:contrast`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { audit, AuditResult } from "../src/test/contrast/wcag";

function fmt(r: AuditResult): string {
  const status = r.pass ? "✓" : "✗";
  const fg = `${r.fg}${r.fgAlpha != null ? `@${r.fgAlpha}` : ""}`;
  const tag = r.size === "large" ? " [large]" : "";
  return `  ${status} ${r.where.padEnd(38)}  ${fg.padEnd(28)} on ${r.bg.padEnd(14)}  ${r.ratio.toFixed(2)}:1  (need ${r.required}:1)${tag}`;
}

function main() {
  const results = audit();
  const grouped = new Map<string, AuditResult[]>();
  for (const r of results) {
    const arr = grouped.get(r.page) ?? [];
    arr.push(r);
    grouped.set(r.page, arr);
  }

  const lines: string[] = [];
  lines.push("WCAG AA Contrast Audit");
  lines.push("======================");
  for (const [page, rs] of grouped) {
    lines.push("");
    lines.push(`▌ ${page}`);
    for (const r of rs) lines.push(fmt(r));
  }

  const failures = results.filter((r) => !r.pass);
  lines.push("");
  lines.push("----------------------");
  lines.push(
    `Total: ${results.length}  Pass: ${results.length - failures.length}  Fail: ${failures.length}`,
  );

  const report = lines.join("\n");
  console.log(report);

  const out = resolve(process.cwd(), "reports/contrast-audit.txt");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, report + "\n", "utf8");
  console.log(`\nReport written to ${out}`);

  if (failures.length > 0) process.exit(1);
}

main();
