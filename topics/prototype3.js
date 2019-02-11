function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

fluffy.age = 5;

console.log(fluffy.age, fluffy.__proto__.age, fluffy.hasOwnProperty('age'));

console.log(muffin.age, muffin.__proto__.age, muffin.hasOwnProperty('age'));