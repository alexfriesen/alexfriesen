---
title: Drag & Drop für Dateien und Ordner im Browser - JavaScript Guide
description: Implementiere Drag & Drop für Dateien und komplette Verzeichnisse mit der File System API. Vollständiges Tutorial mit TypeScript und Fallbacks.
date: '2023-12-19'
tags: ['js', 'ts', 'drag-and-drop']
---

# Dateien und Verzeichnisse per Drag & Drop

## Einführung

Drag & Drop ist mittlerweile eine Standardfunktion in modernen Webanwendungen. Benutzer erwarten einfach, dass sie Dateien aus ihrem Dateisystem ziehen und auf der Webseite ablegen können. Aber warum bei einzelnen Dateien aufhören? Mit den richtigen APIs können wir auch ganze Verzeichnisse verarbeiten!

Mit [getAsFileSystemHandle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle) und der [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) lässt sich das erstaunlich elegant umsetzen.

:article-hint[

<p>
Diese Funktion ist als experimentell gekennzeichnet und funktioniert nicht in allen Browsern. Überprüfen Sie die [Kompatibilitätstabelle](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFileSystemHandle#browser_compatibility) für weitere Informationen.
Aber keine Sorge, wir werden auch einige Fallback-Lösungen behandeln.
</p>
]

## TL;DR

Keine Lust, den ganzen Artikel zu lesen? Kein Problem! Mit `getAsFileSystemHandle()` und ein paar cleveren Fallbacks lässt sich Drag & Drop für Dateien und komplette Verzeichnisse implementieren.

Der fertige Code ist als npm-Paket verfügbar:
- [npm: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper)
- [GitHub: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper)

## Grundlegende Einrichtung

Fangen wir mit den Basics an. Wir brauchen eine Dropzone und Event-Handler für die Drag & Drop-Events.

Zuerst erstellen wir eine minimalistische HTML-Struktur:

```html
<body>
	<p>Drag and Drop <strong>Files & Directories</strong> here</p>
</body>
```

Jetzt fügen wir die Event-Listener hinzu. In diesem Beispiel verwenden wir das gesamte Dokument als Dropzone, aber das funktioniert natürlich auch mit jedem anderen Element.

Wichtig: Wir müssen `preventDefault()` bei `dragover` und `dragleave` aufrufen, sonst wird das `drop`-Event nicht ausgelöst. Browser-Eigenheiten halt! 🤷

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

`DataTransferItem.getAsFileSystemHandle()` ist Teil der modernen File System API und ermöglicht es uns, rekursiv durch Verzeichnisstrukturen zu navigieren. Perfekt für den Fall, dass jemand einen Ordner mit 1000 Dateien in 50 Unterordnern dropped! 📁

Da `getAsFileSystemHandle()` ein `FileSystemHandle`-Objekt zurückgibt, müssen wir zunächst unterscheiden, ob es sich um eine Datei oder ein Verzeichnis handelt.

Mit ein paar Type Guard Funktionen helfen wir TypeScript (und uns selbst) beim Type Narrowing:

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

`DataTransferItem.webkitGetAsEntry` ist unser Fallback für Browser, die noch keine File System API unterstützen. Die Funktion basiert auf der älteren [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) und hat ein paar... nennen wir sie "Eigenheiten". 😅

Trotz des `webkit`-Präfixes funktioniert die API übrigens auch in Firefox. Browser-Namensgebung war schon immer kreativ!

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

Wie man sieht, ist diese API deutlich umständlicher: Callbacks statt Promises, Reader-Objekte erstellen, manuelles Promise-Wrapping... Willkommen in 2015! Aber hey, es funktioniert zuverlässig.

Schließlich rufen wir `readFileSystemEntryRecursively` von `readFileSystemEntryAsync` auf.

```typescript
async function readFileSystemEntryAsync(entry: FileSystemEntry) {
	return readFileSystemEntryRecursively(entry);
}
```

## Optimierung mit Generatorfunktionen

Wer Performance liebt (und wer tut das nicht?), kann den Code mit Generatorfunktionen optimieren. Statt alle Dateien in einem Array zu sammeln und dann zurückzugeben, können wir sie direkt streamen.

Das `yield*`-Keyword delegiert dabei elegant an rekursive Generator-Aufrufe:

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

Der Vorteil: Wir müssen keine riesigen Arrays im Speicher halten. Die Dateien werden nach und nach „ausgespuckt" und erst am Ende gesammelt. Für große Verzeichnisse macht das einen spürbaren Unterschied!

Um den `AsyncGenerator` in ein Array zu konvertieren, brauchen wir noch eine kleine Hilfsfunktion:

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

## Fazit

Und damit haben wir eine vollständige Drag & Drop-Lösung für Dateien und Verzeichnisse! Mit modernen APIs, sinnvollen Fallbacks und Performance-Optimierungen.

Den kompletten Code gibt's hier:
- [GitHub: data-transfer-helper](https://github.com/alexfriesen/data-transfer-helper)
- [NPM: data-transfer-helper](https://www.npmjs.com/package/data-transfer-helper)

Viel Spaß beim Implementieren! 🚀
