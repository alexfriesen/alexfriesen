---
title: Patch Drizzle MySQL JSON
description: Patch Drizzle MySQL JSON fix unparsed JSON data.
date: '2025-03-11'
tags: ['patch', 'drizzle']
---

# Patch Drizzle MySQL JSON

When using Drizzle with MySQL, the JSON data type is not parsed correctly.

Until [drizzle-orm/PR#4224](https://github.com/drizzle-team/drizzle-orm/pull/4224) is merged, you can apply the following patch to fix the issue.

## Patch file

Create the file `patches/drizzle-orm.patch`:

```diff
diff --git a/mysql-core/columns/json.cjs b/mysql-core/columns/json.cjs
index f22ca95afbf8493eacf93a2036d950cbe6a61876..72fa9b46dc18ce763fef9b3d4a0986fe6094b0df 100644
--- a/mysql-core/columns/json.cjs
+++ b/mysql-core/columns/json.cjs
@@ -43,6 +43,16 @@ class MySqlJson extends import_common.MySqlColumn {
   mapToDriverValue(value) {
     return JSON.stringify(value);
   }
+  mapFromDriverValue(value) {
+		if (typeof value === 'string') {
+			try {
+				return JSON.parse(value);
+			} catch {
+				return value;
+			}
+		}
+		return value;
+	}
 }
 function json(name) {
   return new MySqlJsonBuilder(name ?? "");
diff --git a/mysql-core/columns/json.js b/mysql-core/columns/json.js
index db2a1c5c600af80027b70ef6b35b18eacfe41f64..0ea361998b994e352ede4f82071333c8c69a0703 100644
--- a/mysql-core/columns/json.js
+++ b/mysql-core/columns/json.js
@@ -18,6 +18,16 @@ class MySqlJson extends MySqlColumn {
   mapToDriverValue(value) {
     return JSON.stringify(value);
   }
+  mapFromDriverValue(value) {
+		if (typeof value === 'string') {
+			try {
+				return JSON.parse(value);
+			} catch {
+				return value;
+			}
+		}
+		return value;
+	}
 }
 function json(name) {
   return new MySqlJsonBuilder(name ?? "");

```

## Register the patch

Add the following to your `package.json`:

```json
 "pnpm": {
    "patchedDependencies": {
      "drizzle-orm": "patches/drizzle-orm.patch"
    }
  },
```
