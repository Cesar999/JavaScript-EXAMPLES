const array = ['x', 'a', 'b', 'x', 'x', 'c'];

const a = [...new Set(array)];

const b = array.filter((item, index) => array.indexOf(item) === index);

const c = array.reduce((unique, item)=> unique.includes(item) ? unique :[...unique, item]);

console.log(a);
console.log(b);
console.log(c);