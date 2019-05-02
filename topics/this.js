var o={}; // declaring new object

o.name="moon";
o.method=function (x) {
 console.log(x.name, this.name);
};
o.method(o);

var x={};
x.name="sun";
x.method=o.method;
x.method(x);