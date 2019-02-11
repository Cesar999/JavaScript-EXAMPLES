// 'use strict';
var obj = {
    a:{
        b:{
            c: 'Hello'
        }
    }
};

console.log(obj.a.b.c);

var c ='this is important';

with(obj.a.b){
    console.log(c);
}

// Good one
(function(newVar){
    console.log(newVar);
}(obj.a.b.c));