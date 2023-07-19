let myPer = require("./person")
// Reto 8 
class Contacts{
    constructor(){
    this.array = []
    }
    printPersons(){
        return this.array
    }
}
let contactos = new Contacts()
let personaC = new myPer.Person(176,89,2000)
contactos.array.push(personaC)
console.log(contactos.printPersons());
module.exports = {Contacts}