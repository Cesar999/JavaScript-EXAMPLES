function* generator(i) {
    yield i;
    yield i + 6;
    yield i - 2;
    yield i + 3;
    yield i - 3;
  }
  
  var gen = generator(3);
  
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);

for (let value of gen) { 
    console.log(value); 
}

//------------------------------------

// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i <= end; i += step) {
//         iterationCount++;
//         yield i;
//     }
//     return iterationCount;
// }
// let iterator = makeRangeIterator(6,9,1);
// for (let value of iterator) { 
//     console.log(value); 
// }
//-------------------------------------

// var myIterable = {
//     *[Symbol.iterator]() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }

// for (let value of myIterable) { 
//     console.log(value); 
// }

// [...myIterable]; 

//---------------------------------
