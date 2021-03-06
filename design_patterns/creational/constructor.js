var Task = function(name){
    this.name = name;
    this.completed = false;
    this.complete = function(){
        console.log('Completing Task: '+ this.name);
        this.completed = true;
    }
    this.save = function(){
        console.log('Saving Task: '+ this.name);
    }
}

var task1 = new Task('demo1');
var task2 = new Task('demo2');
var task3 = new Task('demo3');
var task4 = new Task('demo4');

task1.complete();
task2.save();
task3.save();
task4.save();