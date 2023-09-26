import {readFiles} from 'h3-formidable';
import path from "path";
import {clearDirectory} from "~/services/server-helpers/clearDir";
import {renameFiles} from "~/services/server-helpers/renameFiles";
import {convertFilesToJpg} from "~/services/server-helpers/convertFilesToJpg";

export default defineEventHandler(async (event) => {
    const {photo: files} = await readFiles(event)
    await clearDirectory(path.join("public", "uploads"));
    await clearDirectory(path.join("public", "convertedArchive", "renamedAndCompressed"));
    await convertFilesToJpg(files)
    await renameFiles('public/uploads')
    return {success: true, message: 'Файлы успешно конвертированы в jpg и переименованы'}
});