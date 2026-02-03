---
title: Text Truncating
description: Truncate a text to a specific length and add an ellipsis string.
date: '2025-02-19'
tags: ['css']
---

# Text Truncating

Because sometimes less is more (and because your design would break otherwise). 📏

## Simple Text Truncating

```css
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## Multi-line Text Truncating

For those who allow more than one line but still want to set boundaries.

[Can I use `line-clamp`?](https://caniuse.com/css-line-clamp)

```css
.truncate-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```
