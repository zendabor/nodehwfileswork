const fs = require("fs");
const path = require("path");

const mainPath = process.argv[2];
const appPath = process.argv[3];
const isDelete = process.argv[4];
const mkd = require("./Mkdir");
const rec = require("./recFiles");


kFoldWithFile(mainPath,appPath,isDelete)
function kFoldWithFile(mainPath,appPath,isDelete) {
    mkd.mkDirFolder(appPath);
    rec.recFiles(mainPath,0,appPath);
    if(JSON.parse(isDelete)){
        fs.rm(path.join(__dirname,mainPath),{recursive:true},err => console.log(err))
        console.log(`исходная папка ${mainPath} удалена`);
    }
}





