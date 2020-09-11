export{}
class person{
  firstname: string;
  lastname: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname; 
  }
  
  getfullname() {
    return this.firstname +" " +this.lastname;
  }

}
var aperson = new person("aayush", "kumar");

console.log(aperson.getfullname());
