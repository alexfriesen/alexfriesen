---
title: Dateien und Verzeichnisse per Drag & Drop
description: Dateien und sogar Verzeichnisse im Browser per Drag & Drop verschieben
date: '2023-12-19'
tags: ['js', 'ts', 'drag-and-drop']
---

# Dateien und Verzeichnisse per Drag & Drop

## Einführung

Das Ziehen und Ablegen von Dateien ist eine gängige Funktion in modernen Anwendungen. Es ermöglicht Benutzern, Dateien aus ihrem Dateisystem zu ziehen und auf einen bestimmten Bereich der Webanwendung abzulegen. Aber diese Funktion ist nicht auf Dateien beschränkt, sie kann auch verwendet werden, um Verzeichnisse zu ziehen und abzulegen.

Mit Hilfe von [getAsFileSystemHandle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) und [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) können wir diese Funktion leicht implementieren.

:article-hint[

<p>
Diese Funktion ist als experimentell gekennzeichnet und funktioniert nicht in allen Browsern. Überprüfen Sie die [Kompatibilitätstabelle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle#browser_compatibility) für weitere Informationen.
Aber keine Sorge, wir werden auch einige Fallback-Lösungen behandeln.
</p>
]

## TLDR;

Mit einer Reihe von Hilfsfunktionen können wir leicht eine Drag-and-Drop-Funktion für Dateien und Verzeichnisse implementieren, indem wir `getAsFileSystemHandle()` und einige Fallbacks verwenden.

Alles ist in einem Paket verpackt, das Sie in Ihrem Projekt verwenden können.
Schauen Sie sich das [npm-Paket](https://www.npmjs.com/package/data-transfer-helper) an oder holen Sie sich den Code auf [Github](https://github.com/alexfriesen/data-transfer-helper).

## Grundlegende Einrichtung

Bevor wir beginnen, benötigen wir eine grundlegende Einrichtung. Wir brauchen eine Dropzone und eine Funktion, die das Drop-Ereignis behandelt.

Zuerst erstellen wir eine einfache HTML-Datei, in der wir eine Dropzone und einen Absatz hinzufügen, der die abgelegten Dateien und Verzeichnisse anzeigt.

```html
<body>
	<p>Drag and Drop <strong>Files & Directories</strong> here</p>
</body>
```

Nun können wir den Ereignis-Listener zu einem Element oder in unserem Fall zum gesamten Dokument hinzufügen. Wir fügen einige Drag-and-Drop-Ereignisse hinzu und rufen `parseFilesFromEvent` in unserem `drop`-Ereignis auf.

Beachten Sie, dass wir auch das Standardverhalten der `dragover`- und `dragleave`-Ereignisse verhindern müssen, um das `drop`-Ereignis auszulösen.

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

`parseFilesFromEvent` wird unser DragEvent behandeln und `parseDataTransferItem` aufrufen.

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

Nun implementieren wir das eigentliche Datei-Parsing. Wir beginnen damit zu überprüfen, ob die FileSystemAccessAPI unterstützt wird und verwenden sie mit der Funktion `readFileSystemHandlesAsync`. Wenn die FileSystemAccessAPI nicht unterstützt wird, fallen wir auf `webkitGetAsEntry` zurück und verwenden `readFileSystemEntryAsync`, um unsere Dateien zu parsen. Wenn beide APIs nicht unterstützt werden, fallen wir auf `getAsFile` zurück und holen eine einzelne Datei.

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

`DataTransferItem.getAsFileSystemHandle()` basiert auf der File System API, die es uns ermöglicht, tief verschachtelte Verzeichnisse rekursiv zu durchlaufen und Dateien aus diesen Verzeichnissen zu holen.

Da `getAsFileSystemHandle()` uns ein `FileSystemHandle`-Objekt gibt, müssen wir herausfinden, ob wir es mit einer Datei oder einem Verzeichnis zu tun haben.

Außerdem müssen wir Typescript mitteilen, mit welchem Typ wir es zu tun haben, indem wir einige Hilfsfunktionen hinzufügen:

```typescript
function isFileSystemDirectoryHandle(handle?: FileSystemHandle | null): handle is FileSystemDirectoryHandle {
	return handle?.kind === 'directory';
}
function isFileSystemFileHanle(handle?: FileSystemHandle | null): handle is FileSystemFileHandle {
	return handle?.kind === 'file';
}
```

Nun können wir rekursiv durch unsere FileSystemHandles gehen und alle Dateien darin holen.

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

Mit allen notwendigen Funktionen an Ort und Stelle können wir schließlich unser `readFileSystemEntryAsync` hinzufügen, das unsere Dateien rekursiv sammelt.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## `webkitGetAsEntry`

`DataTransferItem.webkitGetAsEntry` basiert auf der [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) und funktioniert ähnlich wie die File System API, hat aber einige seltsame Teile. Mit dieser Funktion können wir einen Fallback für Browser ohne `DataTransferItem.getAsFileSystemHandle()` hinzufügen. Trotz des `webkit`-Präfixes funktioniert dies auch in Firefox.

Zuerst fügen wir einige Hilfsfunktionen hinzu, um zwischen Dateien und Verzeichnissen zu unterscheiden.

```typescript
function isFileSystemDirectoryEntry(entry?: FileSystemEntry | null): entry is FileSystemDirectoryEntry {
	return entry?.isDirectory === true;
}
function isFileSystemFileEntry(entry?: FileSystemEntry | null): entry is FileSystemFileEntry {
	return entry?.isFile === true;
}
```

Nun gehen wir durch die Einträge und finden unsere gewünschten Dateien.

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

Wie Sie sehen können, ist diese API umständlicher zu verwenden, da wir mit Rückrufen arbeiten, Leser erstellen und Dinge in Promises einwickeln müssen. Aber es erledigt die Aufgabe!

Schließlich rufen wir `readFileSystemEntryRecursively` von `readFileSystemEntryAsync` auf.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## Optimierung mit Generatorfunktionen

Zuletzt können wir diesen Code verbessern und Generatorfunktionen verwenden, um die Dinge zu beschleunigen. Das Schlüsselwort `yield*` wird verwendet, um jeden Wert aus dem rekursiven Aufruf an den Generator zu übergeben.

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

Mit dieser Änderung müssen wir kein Dateien-Array speichern und zurückgeben, wir geben einfach die Dateien aus und sammeln alles, wenn die Arbeit erledigt ist. Wir können die Ausgabe des `AsyncGenerator` in ein Array umwandeln, indem wir eine weitere Hilfsfunktion hinzufügen.

```typescript
async function generatorToArray<T>(generator: AsyncIterable<T>): Promise<T[]> {
	const items: T[] = [];
	for await (const item of generator) items.push(item);
	return items;
}
```

Nun fügen wir `generatorToArray` zu unserer `readFileSystemEntryAsync`-Funktion hinzu und sind fertig!

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return generatorToArray(readFileSystemEntryRecursively(entry));
}
```

## Outro

Das war's für diesen Beitrag. Ich hoffe, Sie fanden ihn nützlich und informativ. Sie können den Code auf [Github: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper) finden oder ihn mit [NPM: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper) installieren.
