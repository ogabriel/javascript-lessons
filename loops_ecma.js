let obj = {a: 1, b: 2, c: 3};
for (let element in obj) {
    console.log(element);
}

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

let arrz = [1, 2, 3];
for (let element of arrz) {
    console.log(element);
}