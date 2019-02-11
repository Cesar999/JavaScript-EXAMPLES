function Person(name){
    this.name = name;
}

//Mage.prototype = new Person();
Mage.prototype = Object.create(Person.prototype);
Mage.prototype.constructor = Mage;

function Mage(name, title){
    Person.call(this, name);
    this.title = title;
}

//Spec.prototype = new Mage();
Spec.prototype = Object.create(Mage.prototype);
Spec.prototype.constructor = Spec;

function Spec(name, title, element){
    Mage.call(this, name, title);
    this.element = element;
}

var mage1= new Spec('Cesar',16,'Fire');
console.log(mage1 instanceof Person, 'Person');
console.log(mage1 instanceof Mage, 'Mage');
console.log(mage1 instanceof Spec, 'Spec');
console.log(mage1 instanceof Object, 'Object');
console.log(mage1.hasOwnProperty('name'), 'name');
console.log(mage1.hasOwnProperty('title'), 'title');
console.log(mage1.hasOwnProperty('element'), 'element');
console.log(mage1, 'full Object');
console.log(mage1.__proto__, '1st proto');
console.log(mage1.__proto__.__proto__, '2nd proto');
console.log(mage1.__proto__.__proto__.__proto__, '3th proto');
console.log(mage1.__proto__.__proto__.__proto__.__proto__, '4th proto');
//---------------------------------------------------
