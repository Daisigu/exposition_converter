import fs from "fs";
import path from "path";

const clearDirectory = (dir: string) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        fs.unlinkSync(path.join(dir, file));
    }
    new Promise((resolve, reject) => {
        resolve(true)
    })
}
export {clearDirectory}