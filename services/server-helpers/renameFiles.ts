
import fs from "fs";

const renameFiles =(dir: string) => {
    fs.readdir(dir, (err, files,) => {
        if(err) throw err; // не прочитать содержимое папки
        files.forEach((file, index) => {
            fs.rename(`public/uploads/${file}`, `public/uploads/${index + 1}.jpg`, err => {
                if(err) throw err;
            })
        })
    });
}
export {renameFiles}