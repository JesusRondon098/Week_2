import { Contactos } from "./contacts";
import { Person } from "./person";
let contactos = new Contactos()
let persona = new Person("Jesus", 24, "Roja")
contactos.people.push(persona)
console.log(contactos.printCalendar());