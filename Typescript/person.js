"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function () {
        return 2023 - this.age;
    };
    Person.prototype.getAdress = function () {
        return this.address;
    };
    Person.prototype.setAdress = function (address) {
        return this.address = address;
    };
    Person.prototype.printAdress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
