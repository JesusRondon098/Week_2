let myPerson = require("./person")
 

let persona2 = new myPerson.Person(179,780,1999)
console.log(persona2.imc());
console.log("Tu edad es: "+ persona2.calcularEdad());
console.log(persona2.printAll());
console.log(persona2.printHobbies());