const fs = require("fs");
const path = require("path");
const readDire = (base, level,appPath) => {
     fs.readdir(base,(err,files) => {
         if (err) {
             throw err.message
         }
         files.forEach(item => {
             let localBase = path.join(base, item);
             fs.stat(localBase,(err,state)=>{
                 if(err) {
                     throw err.message
                 }
                 if (state.isDirectory()) {
                     readDire(localBase, level + 1,appPath);
                 } else {
                     let li = path.join(appPath,item[0].toUpperCase())
                     if (!fs.existsSync(li)){
                         fs.mkdir(li,err => {
                             if (err){
                                    throw err.message
                             }
                             fs.link(path.join(base, item), path.join(li,item),err => {
                                 if (err){
                                     throw err.message
                                 }
                             });
                         })
                     }
                 }
             });
         })
    });
};

exports.recFiles = (readFrom,lvl,appPath) => {
    readDire(readFrom,lvl,appPath);
}