import { Book } from "./book";
export class Library{
   private books : Book[];
   private address : string;
   private manager : string;
   constructor(books : Book[], address: string, manager: string){
      this.books = books
      this.address = address
      this.manager = manager
   }
   public getBook(){
    return this.books
   }
   public setBook(newBook){
    this.books = newBook
   }
   public getAddress(){
    return this.address
   }
   public setAddress(Address):string{
    return this.address = Address
   }
   public getManager(){
    return this.manager
   }
   public setManager(Manager):string{
    return this.manager = Manager
   }
   public toString():string{
    return `Book1:
            EL libro es:  ${this.books}
            La direccion es: ${this.address}
            El director es: ${this.manager}`
   }
   public getNumberOfBooks():number{
    return this.books.length
   }
   public findByAuthor(author:string):Book[]{
    return this.books.filter(book => book.getAuthor() == author)
   }
}



