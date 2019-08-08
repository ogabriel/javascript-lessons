var personzinha = {
    name: 'Foo', 
    age: 31,
    fav_color: 'blue'
};

document.write(personzinha.name.concat(' || ', personzinha['name'], '\n'));

// constructor
class person {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.fav_color = color;
    }
}

var pessoinha = new person("Aurelio", 789, 'preto e branco');

document.write(pessoinha.name.concat(' & ', pessoinha.age, ' & ', pessoinha.fav_color));