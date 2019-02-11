function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

Cat.prototype = {age: 5};

var snowball = new Cat('Snowball', 'white');

console.log(fluffy.age, fluffy.__proto__.age);
console.log(muffin.age, muffin.__proto__.age);

console.log(snowball.age, snowball.__proto__.age);