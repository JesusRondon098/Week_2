import { Vector } from "./vector";
let elements : Vector = new Vector(3,5)
let vector : Vector = new Vector(4,6)
console.log(vector.print());
console.log(elements.add(vector));
console.log(elements.subs(vector));
console.log(elements.mult(vector));
console.log(elements.multNumber(3))