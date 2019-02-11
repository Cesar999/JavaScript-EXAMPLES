function doThis(callback) {
    setTimeout(()=>{
        console.log('this first');
        callback();
    },2000);
  }

function andThenThis() {
    setTimeout(()=>{
        console.log('and then this');
    },2000);
}

doThis(andThenThis);

let k = 0;
while(k<=5){
    (function(x) {
        setTimeout(()=>{
            console.log(x);
        }, 1001*x);
      })(k++);
}

// setTimeout(()=>{
//     console.log('this first');
// },2000);
// setTimeout(()=>{
//     console.log('and then this');
// },2000);