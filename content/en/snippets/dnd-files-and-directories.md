---
title: DnD Files and Directories
description: Dragging and Dropping Files and even Directories in the Browser
date: '2023-12-19'
tags: ['js', 'ts', 'drag-and-drop']
---

# Drag and Drop Files and Directories

## Intro

Drag & drop is now a standard feature in modern web applications. Users simply expect to be able to drag files from their file system and drop them onto a webpage. But why stop at individual files? With the right APIs, we can also process entire directories!

With [getAsFileSystemHandle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) and the [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API), this can be implemented surprisingly elegantly.

:article-hint[
<p>
This feature is flagged as experimental and will not work in all browsers. Check the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle#browser_compatibility) for more information.
But don't worry, we will also cover some fallback solutions.
</p>
]

## TL;DR

Don't feel like reading the whole article? No problem! With `getAsFileSystemHandle()` and some clever fallbacks, you can implement drag & drop for files and complete directories.

The finished code is available as an npm package:
- [npm: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper)
- [GitHub: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper)

## Basic Setup

Let's start with the basics. We need a dropzone and event handlers for the drag & drop events.

First, we create a minimalistic HTML structure:

```html
<body>
	<p>Drag and Drop <strong>Files & Directories</strong> here</p>
</body>
```

Now we add the event listeners. In this example we use the entire document as a dropzone, but this works with any other element as well.

Important: We must call `preventDefault()` on `dragover` and `dragleave`, otherwise the `drop` event won't fire. Browser quirks! 🤷

```typescript
document.addEventListener('dragover', function (event) {
	event.preventDefault();
	event.stopPropagation();
});
document.addEventListener('dragleave', function (event) {
	event.preventDefault();
	event.stopPropagation();
});

document.addEventListener('drop', async function (event) {
	event.preventDefault();
	event.stopPropagation();

	await parseFilesFromEvent(event);
});
```

`parseFilesFromEvent` will handle our DragEvent and call `parseDataTransferItem`.

```typescript
async function parseFilesFromEvent(event: DragEvent) {
	const itemList = event.dataTransfer?.items;

	if (itemList) {
		// convert DataTransferItemList to an array and remove all non file types
		const items = Array.from(itemList).filter((item) => item.kind === 'file');
		// parse all found DataTransferItem's async
		const fileChunks = await Promise.all(items.map(async (item) => parseDataTransferItem(item)));
		// flatten our Array of File Arrays
		return fileChunks.flat();
	}

	return [];
}
```

Now lets implement the actual file parsing. We will start checking if the FileSystemAccessAPI is supported and use it with the `readFileSystemHandlesAsync` function.
If the FileSystemAccessAPI is not supported we will fallback to `webkitGetAsEntry` and use `readFileSystemEntryAsync` to parse our files.
If both APIs are not supported we will fallback to `getAsFile` and grab a single file.

```typescript
async function parseDataTransferItem(item: DataTransferItem) {
	// check if FileSystemAccessAPI is supported
	if ('getAsFileSystemHandle' in DataTransferItem.prototype) {
		const handle = await item.getAsFileSystemHandle();
		if (handle) {
			return readFileSystemHandlesAsync(handle);
		}
	}

	// check if webkitGetAsEntry is supported
	if ('webkitGetAsEntry' in DataTransferItem.prototype) {
		const entry = item.webkitGetAsEntry();
		if (entry) {
			return readFileSystemEntryAsync(entry);
		}
	}

	// fallback to getAsFile
	const file = item.getAsFile();
	if (file) {
		return [file];
	}

	return [];
}
```

## `getAsFileSystemHandle()`

`DataTransferItem.getAsFileSystemHandle()` is part of the modern File System API and allows us to navigate recursively through directory structures. Perfect for when someone drops a folder with 1000 files in 50 subdirectories! 📁

Since `getAsFileSystemHandle()` returns a `FileSystemHandle` object, we first need to distinguish whether it's a file or a directory.

With a few type guard functions, we help TypeScript (and ourselves) with type narrowing:

```typescript
function isFileSystemDirectoryHandle(handle?: FileSystemHandle | null): handle is FileSystemDirectoryHandle {
	return handle?.kind === 'directory';
}
function isFileSystemFileHanle(handle?: FileSystemHandle | null): handle is FileSystemFileHandle {
	return handle?.kind === 'file';
}
```

Now we can walk recursively through our FileSystemsHandles and grab all the files in them.

```typescript
async function readFileSystemHandleRecursively(entry: FileSystemHandle) {
	const files = [];

	if (isFileSystemFileHanle(entry)) {
		const file = await entry.getFile();
		if (file) {
			files.push(file);
		}
	} else if (isFileSystemDirectoryHandle(entry)) {
		// get every handle in the directory
		for await (const handle of entry.values()) {
			// look for files recursively
			const newFiles = await readFileSystemHandleRecursively(handle);
			files.push(...newFiles);
		}
	}

	return files;
}
```

With all the necessary functions in place we can finally add our `readFileSystemEntryAsync` which collects our files recursively.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## `webkitGetAsEntry`

`DataTransferItem.webkitGetAsEntry` is our fallback for browsers that don't support the File System API yet. The function is based on the older [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) and has a few... let's call them "quirks". 😅

Despite the `webkit` prefix, this API also works in Firefox. Browser naming has always been creative!

First lets add some helper functions to differentiate between files and directories.

```typescript
function isFileSystemDirectoryEntry(entry?: FileSystemEntry | null): entry is FileSystemDirectoryEntry {
	return entry?.isDirectory === true;
}
function isFileSystemFileEntry(entry?: FileSystemEntry | null): entry is FileSystemFileEntry {
	return entry?.isFile === true;
}
```

Now lets walk through the entries and find our desired files.

```typescript
async function readFileSystemEntryRecursively(entry: FileSystemEntry) {
	const files = [];
	if (isFileSystemFileEntry(entry)) {
		const file = await new Promise((resolve) => entry.file(resolve));
		files.push(file);
	} else if (isFileSystemDirectoryEntry(entry)) {
		const reader = entry.createReader();
		const entries = await new Promise((resolve) => reader.readEntries(resolve));
		for (const entry of entries) {
			const newFiles = await readFileSystemEntryRecursively(entry);
			files.push(...newFiles);
		}
	}
	return files;
}
```

As you can see, this API is noticeably more awkward: callbacks instead of promises, creating reader objects, manual promise wrapping... Welcome to 2015! But hey, it works reliably.

Finally call `readFileSystemEntryRecursively` from `readFileSystemEntryAsync`.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## Optimization with Generator Functions

If you love performance (and who doesn't?), you can optimize the code with generator functions. Instead of collecting all files in an array and then returning them, we can stream them directly.

The `yield*` keyword elegantly delegates to recursive generator calls:

```typescript
async function* readFileSystemHandleRecursively(entry: FileSystemHandle): AsyncGenerator<File> {
	if (isFileSystemFileHanle(entry)) {
		const file = await entry.getFile();
		if (file) {
			yield file;
		}
	} else if (isFileSystemDirectoryHandle(entry)) {
		for await (const handle of entry.values()) {
			yield* readFileSystemHandleRecursively(handle);
		}
	}
}
```

The advantage: we don't have to keep huge arrays in memory. Files are "spit out" one by one and only collected at the end. For large directories, this makes a noticeable difference!

To convert the `AsyncGenerator` to an array, we need a small helper function:

```typescript
async function generatorToArray<T>(generator: AsyncIterable<T>): Promise<T[]> {
	const items: T[] = [];
	for await (const item of generator) items.push(item);
	return items;
}
```

Now add `generatorToArray` to our `readFileSystemEntryAsync` function and we are done!

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return generatorToArray(readFileSystemEntryRecursively(entry));
}
```

## Conclusion

And with that, we have a complete drag & drop solution for files and directories! With modern APIs, sensible fallbacks, and performance optimizations.

You can find the complete code here:
- [GitHub: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper)
- [NPM: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper)

Have fun implementing! 🚀
