import {fileURLToPath} from "url";
import path from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const createDirectory = async (folderName) => {
    try {
        const new_directory_path = path.join(__dirname,folderName);
        await fs.mkdir(new_directory_path, { recursive: true });
        console.log(`Directory "${folderName}" created successfully!`);
    } catch (error) {
        console.log(error.message);
    }
};

const createfile = async (dirName,fileName,text) => {
    try {
        const new_file_path = path.join(dirName, fileName);
        await fs.writeFile(new_file_path, text,"utf-8");
        console.log(`File "${fileName}" created successfully!`);
    } catch (error) {
        console.log(error.message);
    }
};

const readFromFile = async (filePath) => {
    try{
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}

const renameFile = async (dirName, oldFileName, newFileName) => {
    try {
        const old_file_path = path.join(dirName, oldFileName);
        const new_file_path = path.join(dirName, newFileName);
        await fs.rename(old_file_path, new_file_path);
        console.log(`File "${oldFileName}" renamed to "${newFileName}" successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
}

const moverFile = async (oldDirName, newDirName, fileName) => {
    try{
        const old_path_name =path.join(oldDirName, fileName);
        const new_path_name = path.join(newDirName, fileName);
        await fs.rename(old_path_name, new_path_name);
        console.log(`File "${fileName}" moved to "${newDirName}" successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
}

const renameDirectory = async (oldDirName, newDirName) => {
    try {
        const old_directory_path = path.join(__dirname, oldDirName);
        const new_directory_path = path.join(__dirname, newDirName);
        await fs.rename(old_directory_path, new_directory_path);
        console.log(`Directory "${oldDirName}" renamed to "${newDirName}" successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
}

const deleteDirectory = async (dirName,folderName) => {
    try {
        const directory_path = path.join(dirName, folderName);
        await fs.rm(directory_path, { recursive: true, force: true });
        console.log(`Directory "${folderName}" deleted successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
}

const deleteFile = async (dirName, fileName) => {
    try {
        const file_path = path.join(dirName, fileName);
        await fs.unlink(file_path);
        console.log(`File "${fileName}" deleted successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
}

const runOperations = async () => {
    const folder_1_path = path.join(__dirname, "folder_1");
    const folder_2_path = path.join(__dirname, "folder_2");

    await createDirectory("folder_1");
    await createDirectory("folder_2");
    await createfile(folder_1_path, "notes.txt", "Hi from NodeJS");
    await readFromFile(path.join(folder_1_path, "notes.txt"));
    await renameFile(folder_1_path, "notes.txt", "my_notes.txt");
    await moverFile(folder_1_path, folder_2_path, "my_notes.txt");
    await renameDirectory("folder_2", "temp");
    await renameDirectory("folder_1", "folder_2");
    await renameDirectory("temp", "folder_1");
    await deleteDirectory(__dirname, "folder_2");
    await deleteFile(folder_1_path, "my_notes.txt");
    await deleteDirectory(__dirname, "folder_1");
    
};
runOperations();
