function Animal(voice){
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function(){
    console.log(this.voice);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Cat(name, color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy.__proto__);
console.log(fluffy.__proto__.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__.__proto__);
