"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k));
        }
    }
    Vector.prototype.getElement = function () {
        return this.elements;
    };
    Vector.prototype.setElements = function (newElementos) {
        this.elements = newElementos;
    };
    Vector.prototype.print = function () {
        return this.elements;
    };
    Vector.prototype.add = function (v1) {
        var suma = new Vector(2, 4);
        if (v1.elements.length == this.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                suma.elements.push(v1.elements[i] + this.elements[i]);
            }
        }
        return suma;
    };
    Vector.prototype.subs = function (v1) {
        var resta = new Vector(3, 6);
        if (v1.elements.length == this.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                resta.elements.push(v1.elements[i] - this.elements[i]);
            }
        }
        return resta;
    };
    Vector.prototype.mult = function (v1) {
        var producto = new Vector(3, 6);
        if (v1.elements.length == this.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                producto.elements.push(v1.elements[i] - this.elements[i]);
            }
        }
        return producto;
    };
    Vector.prototype.multNumber = function (n) {
        var producto = new Vector(3, 6);
        for (var i = 0; i < this.elements.length; i++) {
            producto.elements.push(this.elements[i] - this.elements[0]);
        }
        return producto;
    };
    return Vector;
}());
exports.Vector = Vector;
