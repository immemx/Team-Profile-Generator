const fs = require('fs')

const writeFile = function(fileContent) {

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return
            }
    
            resolve({
                ok: true,
                message: 'Congradulations! Your new File has been created!'
            });
        });
    });
}

module.exports = writeFile;