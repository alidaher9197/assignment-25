# Node.js File System (fs) Operations Demo

This project is a practical demonstration of asynchronous file and directory manipulation in **Node.js** using the built-in `fs/promises` and `path` modules. It showcases how to programmatically manage files, directories, paths, and perform safe cleanups using modern ES module syntax (`import`).

## Features & Helper Functions

The script provides several reusable asynchronous utility functions:

* **`createDirectory(folderName)`**: Creates a new directory (supports nested folders via `{ recursive: true }`).
* **`createfile(dirName, fileName, text)`**: Creates a file inside a specified directory and writes text into it.
* **`readFromFile(filePath)`**: Reads and logs the content of a file.
* **`renameFile(dirName, oldFileName, newFileName)`**: Renames a file within the same directory.
* **`moverFile(oldDirName, newDirName, fileName)`**: Moves a file from one directory to another.
* **`renameDirectory(oldDirName, newDirName)`**: Renames or moves a directory path.
* **`deleteDirectory(dirName, folderName)`**: Recursively and forcefully deletes a directory and its contents (`fs.rm`).
* **`deleteFile(dirName, fileName)`**: Deletes a specific file (`fs.unlink`).

## Script Workflow (`runOperations`)

When you run the script, it automatically executes the following sequence:
1. Creates `folder_1` and `folder_2`.
2. Creates `notes.txt` inside `folder_1` containing `"Hi from NodeJS"`.
3. Reads and prints the content of `notes.txt`.
4. Renames `notes.txt` to `my_notes.txt`.
5. Moves `my_notes.txt` from `folder_1` to `folder_2`.
6. Swaps the names of `folder_1`, `folder_2`, and a temporary directory.
7. Cleans up by deleting remaining files and directories.

## Prerequisites

* Make sure you have **Node.js** installed on your machine (v14 or higher recommended).

## How to Run

1. Save your code into a file, for example: `index.js`.
2. Ensure your `package.json` has `"type": "module"` enabled (since the code uses ES6 `import` statements), or run it directly if supported by your Node environment.
3. Open your terminal and run the script:

   ```bash
   node index.js