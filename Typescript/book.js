"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, lsbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.lsbn = lsbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        return this.title = title;
    };
    Book.prototype.printTitle = function () {
        return "El titulo del libro es: ".concat(this.title);
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (nPages) {
        return this.nPages = nPages;
    };
    Book.prototype.printnPages = function () {
        return "La cantidad de paginas del libro es: ".concat(this.nPages);
    };
    Book.prototype.getlsbn = function () {
        return this.lsbn;
    };
    Book.prototype.setlsbn = function (lsbn) {
        return this.lsbn = lsbn;
    };
    Book.prototype.printlsbn = function () {
        return "El ISBN es: ".concat(this.lsbn);
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (Author) {
        return this.author = Author;
    };
    Book.prototype.printAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (Editorial) {
        return this.editorial = Editorial;
    };
    Book.prototype.printEditorial = function () {
        return "La editorial del libro es: ".concat(this.editorial);
    };
    Book.prototype.tostring = function () {
        return "\n        Title - ".concat(this.title, " \n        Number of Pages - ").concat(this.nPages, " \n        ISBN - ").concat(this.lsbn, "\n        Author - ").concat(this.author, "\n        Editorial - ").concat(this.editorial, " ");
    };
    return Book;
}());
exports.Book = Book;
