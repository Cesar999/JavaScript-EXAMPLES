var RepoFactory = function(){
    this.getReport = function(repoType){
        if(repoType === 'task'){
            return {name: 'Task'};
        }
        if(repoType === 'user'){
            return {name: 'User'};
        }
        if(repoType === 'project'){
            return {name: 'Project'};
        }
    }
}

var repoFactory = new RepoFactory();
console.log(repoFactory.getReport('task').name);
console.log(repoFactory.getReport('user').name);
console.log(repoFactory.getReport('project').name);

