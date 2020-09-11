//export is used to make the programme treat as module and not as script
export { }
let message = "hello aayu kumar"
console.log(message)

//variable declaration
let x = 10
const y = 30

let sum
const title = 'my name'

let isBeiginner: boolean = true;
let total: number = 0;
let name: string = 'aayush';

let sentence: string = `my name is${name}
i dont know type script`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let Myname: string = undefined;


let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['chris', 22];

enum Color { Red=5, green, blue };
let c: Color = Color.green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'aayush';
 
let myvariable: any = 10;
console.log(myvariable.name);



let multitype: number | boolean;
multitype = 20;
multitype = true;

let anytype: any;
anytype = 20;
anytype: true;

function add(num1: number, num2: number=20) {
  if (num2)
    
    return num1 + num2;
  else
    return num1;
}
add(5, 10);
add(5);












