#!/usr/bin/env node
import("iclaude/dist/standalone.mjs").catch((err) => {
  console.error(
    "[iclaude-mcp] Failed to load standalone entrypoint from iclaude.",
  );
  console.error(
    "[iclaude-mcp] Try installing manually: npm i -g iclaude",
  );
  console.error(err instanceof Error ? err.stack || err.message : String(err));
  process.exit(1);
});
