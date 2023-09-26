// @ts-ignore
import archiver from "archiver";
import path from "path";
import fs from "fs";

const archivateUploads = (dir: string) => {
    const archive = archiver('zip', {
        zlib: {level: 9}
    });
    archive.directory(path.join("public", "uploads"), false);
    archive.pipe(fs.createWriteStream(path.join("public", "convertedArchive", dir, "uploads.zip")));
    archive.finalize();
}
export {archivateUploads}