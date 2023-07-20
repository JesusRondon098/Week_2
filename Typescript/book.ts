export class Book{
    private title: string;
    private nPages: number;
    private lsbn: string;
    private author: string;
    private editorial: string;
    constructor(title : string,nPages: number,lsbn: string,author: string,editorial: string){
       this.title = title
       this.nPages = nPages
       this.lsbn = lsbn
       this.author = author
       this.editorial = editorial
    }
    public getTitle():string{
       return this.title
    }
    public setTitle(title : string):string{
       return this.title = title
    }
    public printTitle(){
        return `El titulo del libro es: ${this.title}`
    }
    public getnPages():number{
       return this.nPages
    }
    public setnPages(nPages:number):number{
       return this.nPages = nPages
    }
    public printnPages(){
        return `La cantidad de paginas del libro es: ${this.nPages}`
    }
    public getlsbn():string{
        return this.lsbn
    }
    public setlsbn(lsbn:string):string{
        return this.lsbn = lsbn
    }
    public printlsbn(){
        return `El ISBN es: ${this.lsbn}`
    }
    public getAuthor():string{
        return this.author
    }
    public setAuthor(Author:string):string{
        return this.author = Author
    }
    public printAuthor(){
        return this.author
    }
    public getEditorial(): string{
        return this.editorial
    }
    public setEditorial(Editorial:string):string{
        return this.editorial = Editorial
    }
    public printEditorial(){
        return `La editorial del libro es: ${this.editorial}`
    }
    public tostring():string{
      return `
        Title - ${this.title} 
        Number of Pages - ${this.nPages} 
        ISBN - ${this.lsbn}
        Author - ${this.author}
        Editorial - ${this.editorial} `
    }
}