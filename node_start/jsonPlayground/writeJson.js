const fs = require('fs');
const path = require('path')


const fullPath = path.join(__dirname, "person.json");


const person = {
    name: 'Sarah',
    "lastName": "Conor",
    age: 38,
}

// person.sayHello()

const jsonString = JSON.stringify(person)

fs.writeFileSync(fullPath, jsonString)

// console.log(person)

// targil kita:
// create person object with your name, last name and age
// convert it to json String and write it to json file