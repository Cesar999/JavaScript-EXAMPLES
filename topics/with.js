var a, b, c, x, y, z, j, k, l;
var r = 10;

with (Math) {
  z = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

console.log(z, x, y);

//------------------------

(function (t) { 
  a = t.PI * r * r;
  b = r * t.cos(t.PI);
  c = r * t.sin(t.PI / 2);  
})(Math);

console.log(a, b, c);

//---------------------

let m = Math;

j = m.PI * r * r;
k = r * m.cos(m.PI);
l = r * m.sin(m.PI / 2); 

console.log(j, k, l);

//-----------------------

// Performance: one cannot optimize the access to arg (or to any other variable used inside with), because one cannot predict whether arg will refer to a real variable or to a property inside the with argument. That can change with each call.
// Security: you cannot determine what an identifier refers to by looking at its syntactic surroundings (its lexical environment). According to Brendan Eich that was the actual reason why with was deprecated, not performance considerations. Quoting a tweet of his:
// with violates lexical scope, making program analysis (e.g. for security) hard to infeasible.

//--------------------------------

let obj = {
    obj1: {
        obj2: {
            obj3: {
                obj4: {
                    hi: 'Hello',
                    bye: 'See You'
                }
            }
        }
    }
}
console.log(obj.obj1.obj2.obj3.obj4.hi);
let q = obj.obj1.obj2.obj3.obj4;
console.log(q.hi, q.bye);