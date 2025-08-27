---
title: zod coerceArray
description: Eine Funktion zur Umwandlung von Eingaben in ein Array-Format.
tags: [zod, validation, typescript]
---

# Zod CoerceArray

## coerceArray Funktion

Bei der Verwendung von Zod zur Schema-Validierung kann es vorkommen, dass sowohl einzelne Werte als auch Arrays akzeptiert werden sollen. Die Funktion `coerceArray` hilft dabei, indem sie die Eingabe in ein Array-Format umwandelt.

```typescript
import type { ZodType } from 'zod';
import { z } from 'zod';

export function coerceArray<T extends ZodType>(schema: T) {
  return z
    .union([schema, z.array(schema)])
    .transform((rel) => (Array.isArray(rel) ? rel : [rel]) as T['_output'][]);
}
```

## Nutzungsbeispiel

Das folgende Beispiel zeigt, wie die Funktion `coerceArray` verwendet wird, um sowohl einzelne Werte als auch Arrays zu validieren und in ein Array umzuwandeln.

```typescript
import { z } from 'zod';
import { coerceArray } from './coerceArray';

const schema = coerceArray(z.enum(['active', 'inactive']));

// Validierung von Einzelwerten
schema.parse('active'); // ['active']
schema.parse(['active', 'inactive']); // ['active', 'inactive']
```