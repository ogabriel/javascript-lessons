var personzinha = {
    name: 'Foo', 
    age: 31,
    fav_color: 'blue'
};

document.write(personzinha.name.concat(' || ', personzinha['name'], '\n'));

// constructor
function person(name, age, color) {
        this.name = name;
        this.age = age;
        this.fav_color = color;
    }

var pessoinha = new person("Aurelio", 789, 'preto e branco');

document.write(pessoinha.name.concat(' & ', pessoinha.age, ' & ', pessoinha.fav_color));

function person2(name, age) {
    this.name = name;
    this.age = age;
}

var John = new person2('John', 45);
var James = new person2('James', 89);

function person3(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}

function bornYear() {
    return new Date().getFullYear() - this.age;
    // return 10 - this.age;
}

var me = new person3('Myself', 20);

// it's a function, must be called as a function
document.write(me.yearOfBirth());