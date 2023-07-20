"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var Datos = new book_1.Book("La guerra del fin del mundo", 245, "2344433 - BC23333", "Mario Vargas LLosa", "Planeta");
console.log(Datos.tostring());
//------
console.log("++++++++++");
//------
console.log(Datos.printTitle());
//------
console.log(Datos.printnPages());
//------
console.log(Datos.printlsbn());
//------
console.log(Datos.printAuthor());
//------
console.log(Datos.printEditorial());
