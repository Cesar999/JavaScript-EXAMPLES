// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

//----------------------------

// function makeAdder() {
//     var counter = 0;
//       return function (y) {
//           counter += y; 
//           return counter;
//         }
// };

// var addX = makeAdder();
// console.log(addX(1));  
// console.log(addX(2));  
// console.log(addX(3));  

//-------------------------------

// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

//--------------

function makeAdder() {
  var counter = 0;
    function add(y) {
      counter += y; 
      return counter;
    }
    return add;
};

var addX = makeAdder();
console.log(addX(1));  
console.log(addX(2));  
console.log(addX(3));