import {readFiles} from "h3-formidable";
// @ts-ignore
import officegen from "officegen";
// @ts-ignore
import pdfPoppler from "pdf-poppler";
import {archivateUploads} from "~/services/server-helpers/archivateFiles";
import {clearDirectory} from "~/services/server-helpers/clearDir";
import path from "path";
import {renameFiles} from "~/services/server-helpers/renameFiles";
import {convertPdfToImage} from "~/services/server-helpers/pdfToImages";

export default defineEventHandler(async (event) => {
    const {pptxFile} = await readFiles(event)
    const pptxFilePath = pptxFile[0].filepath
    const outputDir = 'public/uploads';
    await clearDirectory(path.join("public", "uploads"));
    await convertPdfToImage(pptxFilePath, outputDir)
    await renameFiles('public/uploads')
    await archivateUploads('pdfToImages')
    return {success: true, message: 'Файлы успешно конвертированы в jpg и переименованы'}
});