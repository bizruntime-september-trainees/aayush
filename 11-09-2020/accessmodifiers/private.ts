class Student {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
  public display() {
    return (`My code: ${this.studCode}, my name: ${this.studName}.`);
  }
}

let student: Student = new Student(2468, "aayush");
console.log(student.display());  