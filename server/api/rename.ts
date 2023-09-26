import {readFiles} from 'h3-formidable';
import path from "path";
import Jimp from "jimp";
import {clearDirectory} from "~/services/server-helpers/clearDir";

export default defineEventHandler(async (event) => {
    const {photo: files} = await readFiles(event)
    const convertFilesToJpg = (files: FileList[], qualityPercent = 60) => {
        files.forEach(async (file: any, index: number) => {
            let newPath = `${path.join("public", "uploads", (index + 1).toString())}.jpg`;
            let image = await Jimp.read(file.filepath)
            image.quality(qualityPercent)
            await image.write(newPath)
        })
        new Promise((resolve, reject) => {
            resolve(true)
        })
    }
    await clearDirectory(path.join("public", "uploads"));
    await convertFilesToJpg(files)

    return {success: true, message: 'Файлы успешно конвертированы в jpg и переименованы'}
});