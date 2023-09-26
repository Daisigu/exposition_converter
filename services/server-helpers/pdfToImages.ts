// @ts-ignore
import pdfPoppler from "pdf-poppler";

async function convertPdfToImage(pdfPath: string, outputPath: string) {
    const options = {
        format: 'jpeg',  // You can choose other formats like png or tiff
        out_dir: outputPath,
        out_prefix: 'p',
        scale: 4096,
        resolution: 1900,  // in dpi
        quality: 100, // only used for jpeg compression
        page: null  // Specify the page number here to convert a specific page, otherwise null to convert all pages
    };
    try {
        await pdfPoppler.convert(pdfPath, options);
        console.log('PDF converted to image successfully!');
    } catch (error) {
        console.error('Error converting PDF to image:', error);
    }
}
export {convertPdfToImage}