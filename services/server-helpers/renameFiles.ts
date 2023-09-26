import path from "path";
import Jimp from "jimp";
import fs from "fs";

const renameFiles =(files: FileList) => {
    files.forEach(async (file: any, index: number) => {
        let newPath = `${path.join("public", "uploads", (index + 1).toString())}.jpg`;
        fs.writeSync(newPath, file.filepath)
    })
}