// 'use strict';

var toPrint = "print me";

function print(out){
    strToPrint = out;
    console.log(strToPrint);
    console.log(toPrint);
}

//console.log(strToPrint); // Error
print('Hello');
console.log(strToPrint); // Hello