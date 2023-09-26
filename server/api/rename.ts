import {readFiles} from 'h3-formidable';
import fs from "fs";
import path from "path";
import Jimp from "jimp";
import archiver from "archiver";

export default defineEventHandler(async (event) => {
    const {photo: files} = await readFiles(event)
    const clearDirectory = (dir: string) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            fs.unlinkSync(path.join(dir, file));
        }
        new Promise((resolve, reject) => {
            resolve(true)
        })
    }


    const convertFilesToJpg = (files: FileList, qualityPercent=60) => {

        files.forEach(async (file, index) => {
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

    return {
        status: 200,
    }
});