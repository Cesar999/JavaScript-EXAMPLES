
localStorage.setItem('test',[1,2,{x:3}]);
const arr1 = localStorage.getItem('test');
console.log(typeof(arr1));
console.log(uuidv4());
const cont = document.querySelector('.container');
const temp = localStorage.getItem('pokes');
let poks = JSON.parse(temp);

function compareName(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
}
function compareType(a,b) {
    if (a.type < b.type)
      return -1;
    if (a.type > b.type)
      return 1;
    return 0;
}

function updatePoks(arr){
    if(arr===null){arr=[];}
    while(cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    //debugger
    arr.forEach((pok)=>{
        const p = document.createElement('p');
        p.textContent = pok.name + ' - ' + pok.type;
        cont.appendChild(p);
    });
}

if(poks){
    updatePoks(poks);
}


const nameId = document.querySelector('#nameid');
const show = document.querySelector('#show');
const clickMe = document.querySelector('button');

clickMe.addEventListener('click',(e)=>{
    if(e.target.textContent === 'I was clicked'){
        e.target.textContent = 'Click Me';
        show.textContent = nameId.value;
    } else {
        e.target.textContent = 'I was clicked';
        show.textContent = '';
    }
});

const form1 = document.querySelector("#form1");
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(poks===null){
        poks = [];
    }
    poks.push({
        name: e.target.elements.nameValue.value,
        type: e.target.elements.typeValue.value
    });
    localStorage.setItem('pokes', JSON.stringify(poks));
    updatePoks(poks);
});

const forFun = document.querySelector("#for-fun");
forFun.addEventListener('change', (e)=>{
    if(e.target.checked){
        alert(e.target.checked);
    } else {
        alert(e.target.checked);
    }
});

const sort = document.querySelector("#sort");
sort.addEventListener('change',(e)=>{
    const temp = e.target.value;
    let arr;
    if(temp === 'name'){
        arr = poks.sort(compareName);
    } else if(temp === 'type'){
        arr = poks.sort(compareType);
    } else {

    }
    updatePoks(arr);
})
