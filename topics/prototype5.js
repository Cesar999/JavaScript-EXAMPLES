var cat = {
    name: 'Fluffy',
    color: 'White'
}

// Writable -------------------------
console.log('Writable --------------------');
Object.defineProperty(cat, 'name', {writable: false});
cat.name = 'Scratchy';
console.log(cat.name)
//-------------------------------------


// Enumerable -------------------------
console.log('Enumerable -------------------');
Object.defineProperty(cat, 'name', {enumerable: false});
for (var p in cat){
    console.log(p +': '+cat[p]);
}
console.log(Object.keys(cat));
console.log(JSON.stringify(cat));
//------------------------------------------


// Configurable -------------------------
console.log('Configurable -------------------');
Object.defineProperty(cat, 'name', {configurable: false});
//Object.defineProperty(cat, 'name', {enumerable: true}); //Error
//Object.defineProperty(cat, 'name', {writable: true}); //No Error
delete cat.name; // No delete
console.log(cat.name);
//-----------------------------------------

//console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
