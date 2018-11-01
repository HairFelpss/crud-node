const fs = require('fs')

const readFile = (filename) => {
    return new Promisse((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if(err){
                reject(err)
            }else{
                resolve(content)
            }
        })
    })   
}
readFile('teste1.js').then(content => {
    console.log(content)
})
.catch(err => {
    console.log(err)
})