import esbuild from "esbuild";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mjsDir = path.join(__dirname, "../dist/mjs");
const cjsDir = path.join(__dirname, "../dist/cjs");

const options = {
  entryPoints: [path.join(__dirname, "../src/index.ts")],
  bundle: true,
  target: ["chrome100"],
  outdir: mjsDir,
  splitting: false,
  watch: process.env.BUILD_WATCH === "true",
  format: "esm",
  color: true,
  logLevel: "debug",
};
await esbuild.build(options);
await esbuild.build({ ...options, format: "cjs", outdir: cjsDir, target: "es2015" });

const mjsPackage = path.join(mjsDir, "package.json");
const cjsPackage = path.join(cjsDir, "package.json");

try {
  fs.writeFileSync(mjsPackage, JSON.stringify({ type: "module" }, null, 2));
  fs.writeFileSync(cjsPackage, JSON.stringify({ type: "commonjs" }, null, 2));
} catch (e) {
  console.error(e);
}
