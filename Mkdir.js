const fs = require("fs");

exports.mkDirFolder =  (appPath) => {
    if (!fs.existsSync(`./${appPath}`)) {
        fs.mkdirSync(`./${appPath}`);
        console.log('папка успешно создана')
    } else console.log('папка уже создана')
};
