const fs = require('fs') //filesystem

const callback = (err, content) =>{
    console.log(err, content)
}
fs.readFile('firstTest.js', callback)

console.log('fim do arquvio')