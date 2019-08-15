let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 10;
    }
};

tree.grow();
console.log(tree.height);

let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};

let newStudent = Object.assign({}, person, student);