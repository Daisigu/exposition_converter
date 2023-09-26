import path from "path";
import fs from "fs";
// @ts-ignore
import archiver from 'archiver';

export default defineEventHandler(async (event) => {
    const archivateUploads = () => {
        const archive = archiver('zip', {
            zlib: {level: 9}
        });
        archive.directory(path.join("public", "uploads"), false);
        archive.pipe(fs.createWriteStream(path.join("public", "convertedArchive", "renamedAndCompressed", "uploads.zip")));
        archive.finalize();
    }
    await archivateUploads()
});