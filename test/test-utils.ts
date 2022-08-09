import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";
import type { Har } from "har-format";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = path.join(__dirname, "data");
const readDirectory = (dir: string): { file: string; har: Har }[] => {
  const files = fs.readdirSync(dir);
  const all = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const contents = JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" })) as unknown as Har;
    all.push({ file, har: contents });
  }
  return all;
};

const readHar = (name: string): Har =>
  JSON.parse(fs.readFileSync(path.join(dataDir, name), { encoding: "utf8" })) as unknown as Har;

export const validHar = () => readHar("valid.har");
export const allReqs = () => readHar("request-generator-all-status-and-method.har");

export const allInvalidHars = () => readDirectory(path.join(__dirname, "data", "invalid"));
