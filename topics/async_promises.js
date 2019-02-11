
const myPromise1 = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('this first');
            resolve('Hello');
            },2000); 
    });
} 

const myPromise2 = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('and then this');
            resolve('World');
        },2000);
    });
} 

//------------------------------
// let x;
// let y;
// myPromise1()
// .then((d)=>{
//     x = d;
//     return myPromise2();
// })
// .then((d)=>{
//     y = d;
//     console.log(x+' '+y);
// });


//---------------------------------------
function addPromise(){
    return new Promise(resolve => {
        myPromise1()
        .then((a)=>{
            myPromise2()
            .then((b)=>{
                resolve(a+' '+b);
            })
        })
    });
};
  
addPromise()
.then((sum) => {
    console.log(sum);
});

let k = 0;
while(k<=5){
    (function(x) {
        setTimeout(()=>{
            console.log(x);
        }, 1001*x);
      })(k++);
}