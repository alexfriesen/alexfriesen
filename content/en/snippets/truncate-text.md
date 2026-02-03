---
title: Text Truncating with CSS - Single and Multi-line
description: CSS snippets for truncating text with ellipsis. Simple and multi-line text truncation using text-overflow and line-clamp.
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
