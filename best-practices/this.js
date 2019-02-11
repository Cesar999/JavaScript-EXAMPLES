//'use strict';
var obj = {
    val: 'Hi there',
    printVal: function(){
        console.log(this.val);
    }
};

var obj2 = {
    val: 'Whats up',
};

obj2.printVal = obj.printVal;
obj.printVal();
obj2.printVal();

var print = obj.printVal.bind(obj2);
print();