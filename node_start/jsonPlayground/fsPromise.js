// (async () => {
//     const fsPromises = require('fs/promises')
//     const path = require('path')

//     const fullPath = path.join(__dirname, 'person.txt')
 
//     const jsonFullPath = path.join(__dirname, 'person.json')
//     const jsonString = await fsPromises.readFile(fullPath, "utf8")
//     console.log(jsonString)
//     fsPromises.writeFile(jsonFullPath, jsonString)

//     console.log('script ended')

// })()


const fsPromises = require('fs/promises')
const path = require('path')

const fullPath = path.join(__dirname, 'person.txt')

fsPromises.readFile(fullPath, "utf8").then(jsonString => {
    const jsonFullPath = path.join(__dirname, 'person.json')
    fsPromises.writeFile(jsonFullPath, jsonString)
})



// const readFile = () => {
//     return new Promise((resolve, reject) => {
//             const data = {
//                 name: 'Jhon',
//                 age: 13
//             }
//             resolve(data)
//     })
// }

// console.log(readFile())
// const data = readFile(); //not good

