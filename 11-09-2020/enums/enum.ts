export{}
enum numeric {
  Up = 10,
  Down = 2,
  Left = 5,
  Right = 6,
}
console.log(numeric); 

enum astring{
  active = "act",
  inactive = "inact",
  hold = "hld",
  stop='stp'
  
}
function status(status: astring): void{
  console.log(status);
}
status(astring.stop);

enum hetro{
  active = 1,
  inactive = "inact",
  hold = "2",
  stop = 'stp'
}
console.log(hetro.active + hetro.inactive);