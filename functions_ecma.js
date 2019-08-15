function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

// new way
const add2 = (x, y) => {
    let sum = x + y;
    console.log(sum);
}

const greet = x => "Welcome " + x;
const greet2 = () => "welcome";

const arr = [1, 2, 3, 4, 5];

arr.forEach(elem => {
    console.log(elem * 2);
});

// rest
function foo(a, ...array) {
    console.log(a);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(`array: ${element}`); 
    }
}

foo('a', 'b', 'c', 'd');

// spread
const myFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args = [1, 2, 3];

myFunction(...args, 4);

