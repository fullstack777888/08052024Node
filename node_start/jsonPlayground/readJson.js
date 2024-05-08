const fs = require('fs')
const path = require('path')

const fullPath = path.join(__dirname, 'person.txt')

const personString = fs.readFileSync(fullPath, "utf8")

let personJson = null;

try {
    personJson = JSON.parse(personString)
} catch (error) {
    console.log('cant parse json: ', error)
}



console.log('script ended')