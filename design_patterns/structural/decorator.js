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

var myTask = new Task('Some Task');

myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.complete();

//Decorator
urgentTask.notify = function(){
    console.log('Notifying something URGENT!');
}
urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}
urgentTask.save();

//Decortator also is subclass