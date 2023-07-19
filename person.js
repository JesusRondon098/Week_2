//Reto 1
class Person{
    constructor(altura,peso,yearOfBirth){
        this.altura = altura 
        this.peso = peso
        this.yearOfBirth = yearOfBirth
        this.hobbies = ["Juega","Comer","Dormir"]
    }
    imc(){
        return this.peso / (this.altura^2)
    }
    calcularEdad(){
        return  2023 - this.yearOfBirth
    }
    printAll(){
        return  this.altura + "-" + this.peso + "-" + this.yearOfBirth
    }  
    printHobbies(){
    return this.hobbies
    }   
}
let imcR = new Person(179,780)
console.log(imcR.imc());
let persona = new Person(179,78,1999)
console.log("Tu edad es: "+ persona.calcularEdad());
let a = new Person(179,78,1999)
console.log(a.printAll());
let  b= new Person()
console.log(a.printHobbies());
module.exports = {Person}
