
// @ts-ignore
import archiver from 'archiver';
import {archivateUploads} from "~/services/server-helpers/archivateFiles";

export default defineEventHandler(async (event) => {
    const {dir} = await readBody(event)
    archivateUploads(dir)
});