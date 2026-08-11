import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import viteConfig from "../vite.config.mjs";

test("development server stays local and uses a patched Vite release", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );
  const workspaceConfig = await readFile(
    new URL("../pnpm-workspace.yaml", import.meta.url),
    "utf8",
  );

  assert.equal(viteConfig.server.host, "127.0.0.1");
  assert.match(
    packageJson.dependencies.vite,
    /^(?:\^|~)?(?:[7-9]\.|6\.(?:[5-9]\.|4\.(?:[3-9]|[1-9]\d+)))/,
  );
  assert.match(workspaceConfig, /^\s*nanoid:\s*3\.3\.17\s*$/m);
  assert.match(workspaceConfig, /^\s*postcss:\s*8\.5\.23\s*$/m);
});
