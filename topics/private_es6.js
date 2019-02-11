
class Something { 
   
    constructor(){
        var _name = 'No One';
        this.property = "test";
        this.setName=function(name){
            _name = name;
        }
        this.getName=function(){
            return _name;
        }
    }

    show(){
        return this.getName() + ' Encinas';
    }

    change(s){
        this.setName(s);
    }

}

  const instance = new Something();
  Object.seal(instance);
  console.log(instance.property); //=> test
  console.log(instance._name); //=> undefined
  console.log(instance.getName());
  instance.setName('Cesar'); 
  console.log(instance.getName());
  instance._name = 'Roberto';
  console.log(instance._name); 
  console.log(instance.getName());
  console.log(instance.show());
  instance.change('Richard');
  console.log(instance.getName());