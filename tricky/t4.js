function y(){
    console.log(this.length);
}

var x = {
    length: 5,
    method: function(y){
        arguments[0](); //Because 'this' is the length of the arguments
    }
};

x.method(y,1); //2