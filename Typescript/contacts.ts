import { Person } from "./person"
export class Contactos{
    public people:Person[]
    constructor(){
      this.people = []
    }
    public printCalendar(){
      return this.people
    }
}