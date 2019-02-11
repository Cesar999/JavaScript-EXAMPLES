var repo = function(){
   var get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }
    return{
        get:get
    }
}
module.exports = repo();