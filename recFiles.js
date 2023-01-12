const fs = require("fs");
const path = require("path");

exports.recFiles = (readFrom,lvl,appPath) => {
   readDir(readFrom,lvl,appPath);
}
const readDir = (base, level,appPath) => {
    const files = fs.readdirSync(base);
    files.forEach(item => {
        let localBase = path.join(base, item);
        let state = fs.statSync(localBase);
        if (state.isDirectory()) {
            readDir(localBase, level + 1,appPath);
        } else {
            let li = `./${appPath}/${item[0].toUpperCase()}`
            if (!fs.existsSync(li)) {
                fs.mkdirSync(li)
            }
            fs.linkSync(path.join(`./${base}/`, item), `${li}/${item}`, err => {
                if (err) {
                    console.error(err.message);
                }
            });
        }
    })
}