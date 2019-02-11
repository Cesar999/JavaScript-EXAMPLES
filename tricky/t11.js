let car = function(model){
    this.model = model;
}

car.prototype.getModel = function(){
    return this.model;
}

let toyota = new car('toyota');
console.log(toyota.getModel());

let nissan = new car('nissan');
console.log(nissan.getModel());