---
title: zod coerceArray
description: A function for transforming inputs into an array format.
tags: [zod, validation, typescript]
---

# Zod CoerceArray

## coerceArray Function

When using Zod for schema validation, you may encounter situations where you want to accept both a single value and an array of values. The `coerceArray` function helps with this by transforming the input into an array format.

```typescript
import type { ZodType } from 'zod';
import { z } from 'zod';

export function coerceArray<T extends ZodType>(schema: T) {
  return z
    .union([schema, z.array(schema)])
    .transform((rel) => (Array.isArray(rel) ? rel : [rel]) as T['_output'][]);
}
```

## Usage Example

The following example demonstrates how to use the `coerceArray` function to validate and transform both single values and arrays into a consistent array format.

```typescript
import { z } from 'zod';
import { coerceArray } from './coerceArray';

const schema = coerceArray(z.enum(['active', 'inactive']));

// Validating single values
schema.parse('active'); // ['active']
schema.parse(['active', 'inactive']); // ['active', 'inactive']
```