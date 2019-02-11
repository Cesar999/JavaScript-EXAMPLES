function asyncMethod(message){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },1000);
    });
}

function findUser(){
    return asyncMethod('Find user');
}

function populateUser(){
    return asyncMethod('Populate User');
}

function validateUser(){
    return asyncMethod('Validate User');
}

function doStuff(){
    return asyncMethod('Do Stuff');
}

asyncMethod('Open DB Connection')
.then(findUser)
.then(populateUser)
.then(validateUser)
.then(doStuff)
.then(()=>{
    console.log('Finished');
})
.catch();
