import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

// to be used for the final product
// used to get the names of files in a directory
/**
 * Helper method to grab a list of the file names in a specified folder.
 * The file names don't include the extension.
 * @param folderName Folder to list file names from, no extension.
 * @returns 
 */
export async function getFileNames(folderName: string) {
    const folderPath = path.join(process.cwd(), folderName);
    const fileNames = await fs.promises.readdir(folderPath);
    const fileNamesNoExt = fileNames.map((fileName: string) => {
        return fileName.replace(/\.mdx/, '');
    });

    return fileNamesNoExt;
}

// to be used for the final product
// used to get the contents of an individual file
/**
 * Helper method to grab the data of a specified file.
 * Said file needs to be a .mdx file and has to have a couple of key data points.
 * @param folderName 
 * @param fileName 
 * @returns 
 */
export async function getFileData(folderName: string, fileName: string) {
    const filePath = path.join(process.cwd(), folderName, `${fileName}.mdx`);
    const fileContents = await fs.promises.readFile(filePath);

    const matterResult = matter(fileContents);

    const htmlResult = await remark().use(remarkHtml).process(matterResult.content);
    const contentHtml = htmlResult.toString();

    return {
        ...matterResult.data,
        contentHtml
    }
}

/**
 * Returns the title and id for each file in a folder.
 * @param folderName 
 * @returns 
 */
export async function getFilesData(folderName: string) {
    const folderPath = path.join(process.cwd(), folderName);
    const fileNames = await fs.promises.readdir(folderPath);
    const namesWithTitles = fileNames.map((fileName: string) => {
        const id = fileName.replace(/\.mdx/, '');
        
        const fileContents = fs.readFileSync(path.join(process.cwd(), folderName, fileName));

        const matterResult = matter(fileContents);
        const title = matterResult.data.title;

        return {
            id,
            title
        }
    });

    // for (const nameWithTitle of namesWithTitles) {
    //     console.log(nameWithTitle.id);
    //     console.log(nameWithTitle.title);
    // }

    return namesWithTitles;
}