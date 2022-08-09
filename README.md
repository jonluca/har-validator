# HAR Validator (Compiled)

When you want to use `har-validator` but don't want to introduce a dependency on `ajv`.

## Installation

```bash
yarn add har-validator-compiled

npm i --save har-validator-compiled
```

## Usage

```typescript
import { validate } from "har-validator-compiled";
const valid = validate("har", har); // throws a HARError if not valid
```

Or a specific type of validation

```typescript
import { validateHar, validateRequest, validateResponse } from "har-validator-compiled";
const validHar = validateHar(har); // throws a HARError if not valid
const validRequest = validateRequest(request); // throws a HARError if not valid
const validResponse = validateResponse(response); // throws a HARError if not valid
```
