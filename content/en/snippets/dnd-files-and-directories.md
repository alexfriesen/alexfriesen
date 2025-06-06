---
title: DnD Files and Directories
description: Dragging and Dropping Files and even Directories in the Browser
date: '2023-12-19'
tags: ['js', 'ts', 'drag-and-drop']
---

# Drag and Drop Files and Directories

## Intro

Draging and Dropping Files is a common feature in modern applications. It allows users to drag files from their file system and drop them on a specific area of the web application. But this feature is not limited to files, it can also be used to drag and drop directories.

With the help of the [getAsFileSystemHandle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) and [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) we can easily implement this feature.

:article-hint[
<p>
This feature is flagged as experimental and will not work in all browsers. Check the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle#browser_compatibility) for more information.
But don't worry, we will also cover some fallback solutions.
</p>
]

## TLDR;

With a set of helper functions we can easily implement a drag and drop feature for files and directories by using `getAsFileSystemHandle()` and some fallbacks.

Everything is wrapped in a package so you can use in your project.
Check out the [npm Package](https://www.npmjs.com/package/data-transfer-helper) or grab the code on [Github](https://github.com/alexfriesen/data-transfer-helper).

## Basic Setup

Befor we start we need a basic setup. We need a dropzone and a function that handles the drop event.

First we create a basic HTML file where we add a dropzone and a paragraph that will be used to display the dropped files and directories.

```html
<body>
	<p>Drag and Drop <strong>Files & Directories</strong> here</p>
</body>
```

Now we can add the event listener to an element or in our case the entire document. We add some drag and drop events and call `parseFilesFromEvent` in our `drop` event.

Note that we also have to prevent the default behaviour of the `dragover` and `dragleave` events to allow the `drop` event to fire.

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

`DataTransferItem.getAsFileSystemHandle()` is based on the File System API which allows us to go through deeply nested directories recursively and grab files from those directories.

As we will `getAsFileSystemHandle()` will give us a `FileSystemHandle` Object we have to figure out if we are dealing with a File or a Directory.

Also we need to tell Typescript what Type we are dealing with by adding some helper function:

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

`DataTransferItem.webkitGetAsEntry` is based on the [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) and works in a similar to the File System API but has some weird parts.
With this function we can add a fallback Browsers without `DataTransferItem.getAsFileSystemHandle()`.
Despite the `webkit`-prefix this will also work on Firefox.

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

As you can see this API is more awkward to work with as we have to work with callbacks, create readers and have to wrap things in Promises. But it gets the job done!

Finally call `readFileSystemEntryRecursively` from `readFileSystemEntryAsync`.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## Optimisation with Generator Functions

Lastly we can improve this code and use generator functions to speed things up.
The yield\* keyword is used to yield each value from the recursive call to the generator.

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

With this change we dont have to store a files array and return them we just yield the files and collect everything when all the work is done.
We can transform the `AsyncGenerator` output to an array by adding another helper function.

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

## Outro

That's all for this post. I hope you found it useful and informative.
You can find the code on [Github: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper) or install it with [NPM: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper).
