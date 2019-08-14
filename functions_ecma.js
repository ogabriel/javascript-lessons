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