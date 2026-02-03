---
title: zod coerceArray
description: Eine Funktion zur Umwandlung von Eingaben in ein Array-Format.
tags: [zod, validation, typescript]
date: '2025-08-27'
---

# Zod CoerceArray

## coerceArray Funktion

Bei der Verwendung von Zod zur Schema-Validierung stößt man manchmal auf die Herausforderung, dass die API sowohl einzelne Werte als auch Arrays akzeptieren soll. Die Funktion `coerceArray` löst dieses Problem elegant, indem sie jede Eingabe zuverlässig in ein Array-Format umwandelt. Kein manuelles `Array.isArray()`-Checking mehr! 🎉

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

Das folgende Beispiel zeigt, wie `coerceArray` in der Praxis verwendet wird. Egal ob einzelner Wert oder bereits ein Array, das Ergebnis ist immer konsistent:

```typescript
import { z } from 'zod';
import { coerceArray } from './coerceArray';

const schema = coerceArray(z.enum(['active', 'inactive']));

// Validierung von Einzelwerten
schema.parse('active'); // ['active']
schema.parse(['active', 'inactive']); // ['active', 'inactive']
```