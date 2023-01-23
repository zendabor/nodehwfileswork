const {readdir,mkdir,stat,link} = require("fs/promises");
const {existsSync} = require("fs");
const path = require("path");

const readDire = async function (base, level,appPath)  {
        const files = await readdir(base)
            for (const file of files) {
                const currentPath = path.join(base, file)
                const state = await stat(currentPath)
                    if (state.isDirectory()) {
                        await readDire(currentPath, level + 1, appPath);
                    } else {
                        let li = path.join(appPath, file[0].toUpperCase())
                        if (!existsSync(li)) {
                            await mkdir(li)
                        }
                        await link(path.join(base, file), path.join(li, file));
                    }
            }
};

exports.Sorter = async (base, level, appPath) => {
    await readDire(base, level, appPath)
}