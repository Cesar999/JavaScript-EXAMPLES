const arr = [
    {title: 'One More Light', fav: true},
    {title: 'In The End', fav: false},
    {title: 'Leave it all out the rest', fav: true},
    {title: 'Numb', fav: false}, 
    {title: 'Crawling', fav: false}
];

const index = arr.findIndex((n)=>n.title === 'Numb');
console.log(index);

const found = arr.find((n)=>n.title === 'Numb');
console.log(found);

const favs = arr.filter((n)=>n.fav===true);
console.log(favs);

const sorted = arr.sort((a,b)=>a.title>b.title);
console.log(sorted);

const nums = [9,3,5,4,8,1,2,6,0,7];
console.log(nums.sort((a,b)=>a>b));