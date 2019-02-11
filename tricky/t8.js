let x = function(){
    console.log(arguments);
    return [].slice.call(arguments).length;
};

console.log(x(1,2,3,4,5));