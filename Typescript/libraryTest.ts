import { Library } from "./library";
import { Book } from "./book";
let libro1 = new Book("Cien años de soledad", 56, "nª456", "Gabriel Garcia Marquez", "Colombiana")
let libro2 = new Book("Yawuar Fiesta", 78, "nª894563", "Ciro Alegria", "Peruana")
let libro3 = new Book("Gato negro", 23, "nº 67543t", "Edgard Alan Poe", "Estados Unidos")
let libro4 = new Book("Tradiciones" , 67, "nº78654P","Ricardo Palma", "Peruana")

let libreria = new Library([],"P3-F2","Goku")
libreria.setBook([libro1,libro2,libro3,libro4])
console.log(libreria.findByAuthor("Ricardo Palma"));
console.log(libreria.setAddress("De La Rioja"));
console.log(libreria.setManager("Vegeta"));
console.log(libreria.getNumberOfBooks());

 