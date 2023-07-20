
export class Person{
    public name: string;
    public age: number;
    private address: string;
    constructor(name: string,age:number,address: string){
       this.name = name;
       this.age = age;
       this.address = address
    }
    public printName(): string{
        return this.name
    }
    public yearOfBirth():number{
        return  2023 - this.age
    }
    public getAdress(): string{
        return this.address
    }
    public setAdress(address: string): string{
        return this.address = address
    }
    public printAdress(){
        return this.address
    }
}







