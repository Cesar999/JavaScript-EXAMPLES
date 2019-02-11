var A = {
    x: function(){
        console.log('x');
        return this;
    },
    y: function(){
        console.log('y');
        return this;
    },
    z: function(){
        console.log('z');
        return this;
    }
}

A.x().y().z(); // x y z 