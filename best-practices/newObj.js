var obj = function(){
    var _this = this;
    
    console.log(this);
    this.hello = 'hello';

    this.greet = function(){
        console.log(_this.hello);
    };

    this.delayGreeting = function(){
        setTimeout(this.greet, 1000);
    };
};

var greeter = new obj();
console.log(greeter);
greeter.greet();
greeter.delayGreeting();