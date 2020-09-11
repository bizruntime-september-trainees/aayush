export{}
interface person{
  firstname: string;
  lastname: string;
  getfullname(): string;
}
class foo implements person{
  firstname: string;
  lastname: string
  getfullname(): string {
    return this.firstname + this.lastname;
  }
  
}
let aperson: person = new foo();
let aobj = {
  firstname: "aayush",
  lastname: "kumar",
  getfullname: () => 'test'
};
aperson = aobj;
console.log(aobj);