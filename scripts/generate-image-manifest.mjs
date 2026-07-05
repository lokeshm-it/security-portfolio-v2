import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);
const imagesRoot = join(process.cwd(), "public", "images");
const manifestPath = join(imagesRoot, "manifest.json");

const projectFolders = [
    "purview-dsi",
    "communication-compliance",
    "defender-xdr-sentinel",
    "mdca-mde",
    "tvm",
    "zero-trust-email",
  ];

function listImages(folder) {
    const dir = join(imagesRoot, folder);
    if (!existsSync(dir)) return [];
    return readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(file.slice(file.lastIndexOf(".")).toLowerCase()))
      .sort();
}

const manifest = {};
for (const folder of projectFolders) {
    manifest[folder] = listImages(folder);
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(`Wrote ${manifestPath}`);
for (const [folder, files] of Object.entries(manifest)) {
    console.log(`  ${folder}: ${files.length} image(s)`);
}
