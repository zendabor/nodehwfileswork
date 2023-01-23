const fs = require("fs/promises");
const {existsSync} = require("fs");
exports.mkDirFolder = async (npz) => {
        console.log(npz)
        if (!existsSync(npz)) {
            await fs.mkdir(npz);
            console.log('папка успешно создана')
        } else console.log('папка уже создана')
};