"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book_1 = require("./book");
var libro1 = new book_1.Book("Cien años de soledad", 56, "nª456", "Gabriel Garcia Marquez", "Colombiana");
var libro2 = new book_1.Book("Yawuar Fiesta", 78, "nª894563", "Ciro Alegria", "Peruana");
var libro3 = new book_1.Book("Gato negro", 23, "nº 67543t", "Edgard Alan Poe", "Estados Unidos");
var libro4 = new book_1.Book("Tradiciones", 67, "nº78654P", "Ricardo Palma", "Peruana");
var libreria = new library_1.Library([], "P3-F2", "Goku");
libreria.setBook([libro1, libro2, libro3, libro4]);
console.log(libreria.findByAuthor("Ricardo Palma"));
console.log(libreria.setAddress("De La Rioja"));
console.log(libreria.setManager("Vegeta"));
console.log(libreria.getNumberOfBooks());
