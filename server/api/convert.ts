import {readFiles} from "h3-formidable";
// @ts-ignore
import officegen from "officegen";
// @ts-ignore
import pdfPoppler from "pdf-poppler";
import {archivateUploads} from "~/services/server-helpers/archivateFiles";
import {clearDirectory} from "~/services/server-helpers/clearDir";
import path from "path";
export default defineEventHandler(async (event) => {
    const {pptxFile} = await readFiles(event)
    const pptxFilePath = pptxFile[0].filepath
    const outputDir = 'public/uploads';
    async function convertPdfToImage(pdfPath: string, outputPath: string) {
        const options = {
            format: 'jpeg',  // You can choose other formats like png or tiff
            out_dir: outputPath,
            out_prefix: 'p',
            page: null  // Specify the page number here to convert a specific page, otherwise null to convert all pages
        };
        try {
            await pdfPoppler.convert(pdfPath, options);
            console.log('PDF converted to image successfully!');
        } catch (error) {
            console.error('Error converting PDF to image:', error);
        }
    }
    await clearDirectory(path.join("public", "uploads"));
    await convertPdfToImage(pptxFilePath, outputDir)
    await archivateUploads('pdfToImages')
});