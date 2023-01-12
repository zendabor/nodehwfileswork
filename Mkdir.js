const fs = require("fs");

exports.mkDirFolder = (npz) => {
        if (!fs.existsSync(npz)) {
            fs.mkdirSync(npz);
            console.log('папка успешно создана')
        } else console.log('папка уже создана')
};
