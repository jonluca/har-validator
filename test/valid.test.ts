import { describe, test } from "vitest";
import { validateHar } from "../src";
import { allReqs, validHar } from "./test-utils";

const har = validHar();
const largeHar = allReqs();

describe("Validates HAR properly", async () => {
  test(`Does not throw an error`, async ({ expect }) => {
    expect(() => validateHar(har)).not.toThrow();
  });
  test(`Validation returns true`, async ({ expect }) => {
    const isValid = validateHar(har);
    expect(isValid).toEqual(true);
  });
  test(`Does not throw an error`, async ({ expect }) => {
    expect(() => validateHar(largeHar)).not.toThrow();
  });
  test(`Validation returns true`, async ({ expect }) => {
    const isValid = validateHar(largeHar);
    expect(isValid).toEqual(true);
  });
});
