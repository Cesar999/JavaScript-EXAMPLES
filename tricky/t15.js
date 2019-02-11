let foo = () => {
    console.log("Alice");
    return false;
}
let bar = () => {
    console.log("Bob");
    return true;
}
let x = false || bar() || foo();