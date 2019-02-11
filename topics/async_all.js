function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 1000);
    });
}

// Async/Await --------------------------------------  
async function addAsync(x) {
    const a = await doubleAfter2Seconds(x);
    const b = await doubleAfter2Seconds(a);
    const c = await doubleAfter2Seconds(b);
    return a + b + c;
}
  
addAsync(10).then((sum) => {
    console.log(sum, 'Async/Await');
});

// Promises --------------------------------------
function addPromise(x){
    return new Promise(resolve => {
        doubleAfter2Seconds(x)
        .then((a)=>{
            doubleAfter2Seconds(a)
            .then((b)=>{
                doubleAfter2Seconds(b)
                .then((c)=>{
                    resolve(a+b+c);
                })
            })
        })
    });
};
  
addPromise(10)
.then((sum) => {
    console.log(sum, 'Promises Bad');
});
  
//-------------

let x,y;
doubleAfter2Seconds(10)
.then((a)=>{
    x = a;
    return doubleAfter2Seconds(a);
})
.then((b)=>{
    y = b;
    return doubleAfter2Seconds(b);
})
.then((c)=>{
    console.log(x+y+c, 'Promises Good');
});

// Callback -----------------------------------
function _doubleAfter2Seconds(x, callback) {
    setTimeout(() => {
        callback(x*2);
    }, 1000);
}

function printAll(x){
    _doubleAfter2Seconds(x, (a) => {
        _doubleAfter2Seconds(a, (b) => {
            _doubleAfter2Seconds(b, (c) => {
                console.log(a+b+c, 'Callback');
            });
        });
    });
  }
printAll(10);
