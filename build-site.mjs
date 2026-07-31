import { cp, mkdir, rm } from "node:fs/promises";

const staticFiles = ["index.html", "style.css", "script.js"];
const staticDirs = ["assets"];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });

for (const file of staticFiles) {
  await cp(file, `dist/client/${file}`);
}

for (const dir of staticDirs) {
  await cp(dir, `dist/client/${dir}`, { recursive: true });
}
