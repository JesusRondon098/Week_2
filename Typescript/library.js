"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBook = function () {
        return this.books;
    };
    Library.prototype.setBook = function (newBook) {
        this.books = newBook;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (Address) {
        return this.address = Address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (Manager) {
        return this.manager = Manager;
    };
    Library.prototype.toString = function () {
        return "Book1:\n            EL libro es:  ".concat(this.books, "\n            La direccion es: ").concat(this.address, "\n            El director es: ").concat(this.manager);
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.getAuthor() == author; });
    };
    return Library;
}());
exports.Library = Library;
