const fs = require("fs");
const path = require("path");

const mainPath = process.argv[2];
const appPath = process.argv[3];
const isDelete = process.argv[4];
const mkd = require("./Mkdir");
const rec = require("./recFiles");

const kFoldWithFile = async (mainPath,appPath,isDelete) => {
       await mkd.mkDirFolder(path.join(__dirname,appPath));
       await rec.Sorter(path.join(__dirname,mainPath),0,appPath);
      if(await JSON.parse(isDelete)){
          fs.rm(path.join(__dirname,mainPath),{recursive:true},err => console.log(err.message))
          console.log(`исходная папка ${mainPath} удалена`);
      }
}

kFoldWithFile(mainPath, appPath, isDelete).then()

