
// @ts-ignore
import archiver from 'archiver';
import path from "path";
import fs from "fs";
export default defineEventHandler(async (event) => {
   const archivePath = path.join('public', 'convertedArchive', 'renamedAndCompressed', 'uploads.zip');
   const archive = fs.createWriteStream(archivePath)

});