let myIterableObj = {
    [Symbol.iterator]: function* () {
        yield 1; yield 2; yield 3;
    }
}
console.log([...myIterableObj]);

function* idMaker() {
    let index = 0;
    while(index < 5)
        yield index++;
}

var gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);