export{}
class Animal {
  name: string;
  constructor(Name: string) {
    this.name = Name;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}meter.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("moving");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("running");
    super.move(distanceInMeters);
  }
}

let ani1 = new Snake("cobra");
let ani2: Animal = new Horse("horse");

ani1.move();
ani2.move(34);