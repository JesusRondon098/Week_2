"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var contactos = new contacts_1.Contactos();
var persona = new person_1.Person("Jesus", 24, "Roja");
contactos.people.push(persona);
console.log(contactos.printCalendar());
