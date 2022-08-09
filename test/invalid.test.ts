import { describe, test } from "vitest";
import { validateHar } from "../src";
import { allInvalidHars } from "./test-utils";

const invalidHars = allInvalidHars();

describe("Throws error on invalid HAR", async () => {
  invalidHars.map(({ file, har }) => {
    test(`${file} Throws an error`, async ({ expect }) => {
      expect(() => validateHar(har)).toThrow(/Validation Failed/);
    });
    test(`${file} Validation errors are what was expected`, async ({ expect }) => {
      try {
        validateHar(har);
      } catch (e: any) {
        expect(e.name).toMatch(/HARError/);
        expect(e.errors).toMatchSnapshot();
      }
    });
  });
});
