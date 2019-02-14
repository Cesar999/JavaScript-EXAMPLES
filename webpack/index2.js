export function add(x,y){
    return x+y;
}
console.log('Index2');

export function multi(x,y){
    return x*y;
}

function scream(){
    console.log('Hey Oh lISTEN!!!');
}
export {scream as default }