---
title: Text Truncating
description: Truncate a text to a specific length and add an ellipsis string.
date: '2025-02-19'
tags: ['css']
---

# Text Truncating

## Simple Text Truncating

```css
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## Multi-line Text Truncating

[Can I use `line-clamp`?](https://caniuse.com/css-line-clamp)

```css
.truncate-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```
