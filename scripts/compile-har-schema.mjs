import fs from "fs";
import path, { dirname } from "path";
import schema from "har-schema";
import { fileURLToPath } from "url";
import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone/index.js";
import addFormats from "ajv-formats";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const schemaDir = path.join(__dirname, "../src");
const schemas = Object.values(schema);

const ajv = new Ajv({
  schemas,
  verbose: true,
  strict: false,
  validateSchema: false,
  validateFormats: true,
  code: {
    source: true,
    lines: true,
    optimize: false,
  },
});
addFormats(ajv);
const cjsCode = standaloneCode(ajv);

const validatorPath = path.join(schemaDir, "validate.js");

fs.writeFileSync(validatorPath, cjsCode);
