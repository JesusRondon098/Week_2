export class Vector{
    private elements : number[]
    constructor(n: number, k: number){
        this.elements = []
        for(let i = 0; i < n; i++){
           this.elements.push(Math.round(Math.random()*k))
        }
    }
    getElement(){
        return this.elements
    }
    setElements(newElementos):void{
        this.elements = newElementos
    }
    print(){
        return this.elements
    }
    add(v1:Vector):Vector{
    let suma : Vector = new Vector(2,4)
    if(v1.elements.length == this.elements.length){
        for(let i = 0; i < this.elements.length;i++){
           suma.elements.push(v1.elements[i] + this.elements[i])          
        }
     }
     return suma
    }
    subs(v1:Vector):Vector{
    let resta:Vector = new Vector(3,6)
    if(v1.elements.length == this.elements.length){
        for(let i = 0; i < this.elements.length; i++){
            resta.elements.push(v1.elements[i]-this.elements[i])
        }
     }    
     return resta
    }
    mult(v1:Vector):Vector{
    let producto:Vector = new Vector(3,6)
    if(v1.elements.length == this.elements.length){
        for(let i = 0; i < this.elements.length; i++){
            producto.elements.push(v1.elements[i]-this.elements[i]) 
        }
     }    
     return producto
    }
    multNumber(n:number):Vector{
    let producto:Vector = new Vector(3,6)
        for(let i = 0; i < this.elements.length; i++){
            producto.elements.push(this.elements[i]-this.elements[0]) 
        }
    
    return producto 
    }
}




