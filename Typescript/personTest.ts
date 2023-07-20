import {Person} from "./person"
let peersona = new Person("Jesus",24,"Rojo");
console.log(peersona.printName());
console.log(peersona.yearOfBirth());
console.log(peersona.getAdress());
peersona.setAdress("1999")
console.log(peersona.getAdress());
console.log(peersona.printAdress());