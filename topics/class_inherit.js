class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age}`);
    }
}

class Employe extends Person{
    constructor(name, age, job){
        super(name,age);
        this.job = job;
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age} and I work on ${this.job}`);
    }
}

const me = new Person('Cesar',26);
me.getBio();
const son = new Employe('Ricardo',1,'Programming');
son.getBio();
console.log(son);