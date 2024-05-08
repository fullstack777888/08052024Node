// console.log(__dirname)


// Targil kita
// create text file name it with {yourName}.txt and contet text
// should be your lastname and age on 2 different lines
// it should be in src/
// use fs


const fs = require('fs');
const path = require('path')



const fullPath = path.join(__dirname, '..', 'next', 'beni.txt' )
// const fullPath = `${__dirname}/../next/beni.txt`
console.log(fullPath)

// console.log(__dirname + '/beni.txt')

const content = "last name : Beni \nage: 18"

fs.writeFileSync(fullPath, content)
// fs.writeFileSync(fullPath, "last name : Beni \nage: 18")



// Targil kita 2
// create text file name it with {yourName}.txt and contet text
// should be your lastname and age on 2 different lines
// it should be in next/
// use fs and call it from app2.js


