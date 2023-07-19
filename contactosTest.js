let myCont = require("./contactos")
let myPers = require("./person")

let personas = new myPers.Person(179,780,1999)
let contactos = new myCont.Contacts()

contactos.array.push(personas)
console.log(contactos.printPersons());