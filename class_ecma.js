class Rectangle {
    constructor(height, width) {
       this.height = height;
       this.width = width;
    }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 5);

// unnamed
var Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

class Rectanble {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
const squari = new Rectanble(5, 5);
console.log(squari.area); // 25

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(7, 2);
  const p2 = new Point(3, 8);
  
  console.log(Point.distance(p1, p2));

  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      super.speak(); // Super
      console.log(this.name + ' barks.');
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak();