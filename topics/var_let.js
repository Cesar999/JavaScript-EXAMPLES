let x = function(){
    if(true){
        var v = 2;
        let l = 1;
    }
    console.log(v);
    console.log(l); //ReferenceError: l is not defined
}

x();