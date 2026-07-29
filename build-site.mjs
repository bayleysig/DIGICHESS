import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const staticFiles = ["index.html", "style.css", "script.js"];
const staticDirs = ["assets"];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });

for (const file of staticFiles) {
  await cp(file, `dist/client/${file}`);
}

for (const dir of staticDirs) {
  await cp(dir, `dist/client/${dir}`, { recursive: true });
}

const worker = `
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function getAssetPath(pathname) {
  if (pathname === "/" || pathname === "") return "/index.html";
  return pathname;
}

function withContentType(response, pathname) {
  if (!response || response.status === 404) return response;
  const headers = new Headers(response.headers);
  const dotIndex = pathname.lastIndexOf(".");
  const extension = dotIndex >= 0 ? pathname.slice(dotIndex).toLowerCase() : ".html";
  if (!headers.has("content-type") && MIME_TYPES[extension]) {
    headers.set("content-type", MIME_TYPES[extension]);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const assetPath = getAssetPath(url.pathname);

    if (env?.ASSETS) {
      const assetUrl = new URL(assetPath, url.origin);
      const response = await env.ASSETS.fetch(new Request(assetUrl, request));
      if (response.status !== 404) {
        return withContentType(response, assetPath);
      }

      if (!assetPath.includes(".")) {
        const indexResponse = await env.ASSETS.fetch(new Request(new URL("/index.html", url.origin), request));
        if (indexResponse.status !== 404) {
          return withContentType(indexResponse, "/index.html");
        }
      }
    }

    return new Response("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
};
`;

await writeFile("dist/server/index.js", worker.trimStart());
