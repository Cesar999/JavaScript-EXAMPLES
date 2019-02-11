const doThis = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('this first');
            resolve('Hello');
            },2000); 
    });
} 

const andThenThis = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('and then this');
            resolve('World');
        },2000);
    });
} 

async function go(){
    let x = await doThis();
    let y = await andThenThis();
    return x + ' ' + y;
}

go()
.then((data)=>{
    console.log(data)
})

let k = 0;
while(k<=5){
    (function(x) {
        setTimeout(()=>{
            console.log(x);
        }, 1001*x);
      })(k++);
}