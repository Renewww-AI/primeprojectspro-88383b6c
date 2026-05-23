import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const getBasePath = () => {
  const configuredBase = process.env.VITE_BASE_PATH;
  if (configuredBase) {
    const withLeadingSlash = configuredBase.startsWith("/") ? configuredBase : `/${configuredBase}`;
    return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
  }

  if (process.env.GITHUB_PAGES === "true" && process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    return repo.toLowerCase() === `${owner}.github.io`.toLowerCase() ? "/" : `/${repo}/`;
  }

  return "/";
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
