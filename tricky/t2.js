function a(){
    return 'hello';
}

const sentence = a `hi`; // ===  a(`hi`)
console.log(sentence);