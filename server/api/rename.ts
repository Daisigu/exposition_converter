import {readFiles} from 'h3-formidable';
import fs from "fs";
import path from "path";
import Jimp from "jimp";

export default defineEventHandler(async (event) => {
    const {photo: files} = await readFiles(event)

    const clearDirectory = (dir: string) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            fs.unlinkSync(path.join(dir, file));
        }
    }
    const convertToJpg = async (file: File) => {
        const image = await Jimp.read(file.filepath)
        await image.quality(60)
        return image
    }
    const writePhotosInUploadDir =  (files: FileList) => {
        files.forEach(async (file, index) => {
            console.log('FILE BEFORE',file)
            file = await convertToJpg(file)
            console.log('FILE AFTER', file)

            let newPath = `${path.join("public", "uploads", (index + 1).toString())}.${file.mimetype.split('/')[1]}`;
            fs.copyFileSync(file.filepath, newPath)
        })
    }

    clearDirectory(path.join("public", "uploads"));
    writePhotosInUploadDir(files)
    convertToJpg(files)

});