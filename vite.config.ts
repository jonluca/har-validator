import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    dir: "test",
    watch: false,
    threads: false,
    testTimeout: 5000,
    isolate: false,
    passWithNoTests: true,
    reporters: ["verbose"],
    coverage: { reporter: ["lcov", "html", "text"] },
    deps: {
      fallbackCJS: true,
      registerNodeLoader: true,
    },
  },
});
