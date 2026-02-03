---
title: zod coerceArray
description: A function for transforming inputs into an array format.
tags: [zod, validation, typescript]
date: '2025-08-27'
---

# Zod CoerceArray

## coerceArray Function

When using Zod for schema validation, you sometimes face the challenge where your API should accept both single values and arrays. The `coerceArray` function elegantly solves this problem by reliably transforming any input into an array format. No more manual `Array.isArray()` checking! 🎉

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

The following example shows how `coerceArray` works in practice. Whether it's a single value or already an array, the result is always consistent:

```typescript
import { z } from 'zod';
import { coerceArray } from './coerceArray';

const schema = coerceArray(z.enum(['active', 'inactive']));

// Validating single values
schema.parse('active'); // ['active']
schema.parse(['active', 'inactive']); // ['active', 'inactive']
```