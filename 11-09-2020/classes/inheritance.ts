export{}
class person{
  firstname: string;
  lastname: string;

  greet() {
    console.log("hey there ")
  }
}
class programmer extends person {
  greet() {
    console.log("hello there how r u??")
  }
  greetnew() {
    super.greet()
  }

}
var aprogrammer = new programmer();
aprogrammer.greet();
