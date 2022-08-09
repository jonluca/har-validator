import type {
  Browser,
  Cache,
  CacheDetails,
  Content,
  Cookie,
  Creator,
  Entry,
  Har,
  Header,
  Log,
  Page,
  PageTiming,
  PostData,
  QueryString,
  Request,
  Response,
  Timings,
} from "har-format";
import * as validators from "./validate.js";
import type { DataValidationCxt, ErrorObject } from "ajv/lib/types";

interface ValidatorFunction {
  (data: unknown, opts?: Omit<DataValidationCxt, "dynamicAnchors">): boolean;
  errors: ErrorObject[];
}
export class HARError extends Error {
  name = "HARError";
  message = "Validation Failed";
  errors: ErrorObject[] = [];
  constructor(errors: ErrorObject[]) {
    super();
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

const validatorMappings: Record<string, ValidatorFunction> = {
  request: validators["request.json"] as ValidatorFunction,
  afterRequest: validators["afterRequest.json"] as ValidatorFunction,
  beforeRequest: validators["beforeRequest.json"] as ValidatorFunction,
  browser: validators["browser.json"] as ValidatorFunction,
  cache: validators["cache.json"] as ValidatorFunction,
  content: validators["content.json"] as ValidatorFunction,
  cookie: validators["cookie.json"] as ValidatorFunction,
  creator: validators["creator.json"] as ValidatorFunction,
  entry: validators["entry.json"] as ValidatorFunction,
  har: validators["har.json"] as ValidatorFunction,
  header: validators["header.json"] as ValidatorFunction,
  log: validators["log.json"] as ValidatorFunction,
  page: validators["page.json"] as ValidatorFunction,
  pageTimings: validators["pageTimings.json"] as ValidatorFunction,
  postData: validators["postData.json"] as ValidatorFunction,
  query: validators["query.json"] as ValidatorFunction,
  response: validators["response.json"] as ValidatorFunction,
  timings: validators["timings.json"] as ValidatorFunction,
} as const;

export type TypeValidatorName = keyof TypeMappings;
interface TypeMappings {
  request: Request;
  afterRequest: CacheDetails;
  beforeRequest: CacheDetails;
  browser: Browser;
  cache: Cache;
  content: Content;
  cookie: Cookie;
  creator: Creator;
  entry: Entry;
  har: Har;
  header: Header;
  log: Log;
  page: Page;
  pageTimings: PageTiming;
  postData: PostData;
  query: QueryString;
  response: Response;
  timings: Timings;
}
export const validate = <T extends TypeValidatorName>(schema: T, obj: unknown): obj is TypeMappings[T] => {
  const validator = validatorMappings[schema];
  const result = validator(obj);
  if (!result) {
    throw new HARError(validator.errors);
  }
  return result;
};

export const validateRequest = (request: unknown): request is Request => {
  return validate("request", request);
};

export const validateResponse = (response: unknown): response is Response => {
  return validate("response", response);
};

export const validateHar = (har: unknown): har is Request => {
  return validate("har", har);
};

export default validateRequest;
