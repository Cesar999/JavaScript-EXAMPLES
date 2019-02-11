const getTip = (amount)=>{
    if(typeof amount === 'number'){
        return amount*.25;
    } else {
        throw Error('Argument must be a number');
    }
}
//const result = getTip('5');
// const result = getTip(2);
// console.log(result);

//------------------

try{
    const result = getTip(2);
    console.log(result);
} catch(e){
    console.log('Catch error');
}