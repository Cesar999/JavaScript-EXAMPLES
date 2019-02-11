var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('Completing Task: '+ this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('Saving Task: '+ this.name);
}

module.exports = Task;