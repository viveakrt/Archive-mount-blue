const fs = require("fs");
const path = require("path");

function readDataAndReturnAsCSV(file) {    
    const newpath = path.join(__dirname, file);
    
    return fs.readFileSync(newpath,'utf-8');
}

(async ()=> {
    const d = await readDataAndReturnAsCSV(".gitignore");
    console.log(d);
})();