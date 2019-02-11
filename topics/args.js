function func(x){
    console.log(typeof x, arguments.length);
    }
    func(); //==> "undefined", 0
    func(7); //==> "number", 7
    func("1", "2", "3"); //==> "string", 3