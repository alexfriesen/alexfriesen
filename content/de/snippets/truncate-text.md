---
title: Text kürzen
description: Kürzen Sie einen Text auf eine bestimmte Länge und fügen Sie einen Ellipsen-String hinzu.
date: '2025-02-19'
tags: ['css']
---

# Text kürzen

## Einfaches Text-Truncating

```css
.truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

## Mehrzeiliges Text-Truncating

[Can I use `line-clamp`?](https://caniuse.com/css-line-clamp)

```css
.truncate-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
```
