import { cp, mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(projectDir, "dist");
const clientDir = join(distDir, "client");
const serverDir = join(distDir, "server");

await mkdir(clientDir, { recursive: true });

for (const entry of await readdir(distDir, { withFileTypes: true })) {
  if (entry.name === "client" || entry.name === "server") continue;

  await cp(join(distDir, entry.name), join(clientDir, entry.name), {
    recursive: entry.isDirectory(),
  });
}

await mkdir(serverDir, { recursive: true });
await writeFile(
  join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  },
};
`,
  "utf8",
);