import path from "path";
import Jimp from "jimp";

const convertFilesToJpg = async (files: FileList[]) => {
    return Promise.all(files.map(async (file: any, index: number): Promise<void> => {
        let newPath = `${path.join("public", "uploads", (index + 1).toString())}.jpg`;
        let image = await Jimp.read(file.filepath)
        image.quality(100)
        await image.write(newPath)
    }))
}
export {convertFilesToJpg}