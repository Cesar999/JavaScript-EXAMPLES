console.log(expression); //expression is not a function

myFunc();

function myFunc(){
    console.log('Hi from my func');
}

var expression = function(){
    console.log('Hi from my func');
};

expression();