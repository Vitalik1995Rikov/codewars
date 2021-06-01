function pigIt(text) {
    let arr = text.split(' ');
    let arrFinish = [];

for (let i = 0; i < arr.length; i++) {
    let arrNew = arr[i].split('');
    arrFinish.push(arrNew);
}
for (let j = 0; j < arrFinish.length; j++) {
    arrFinish[j].push(arrFinish[j][0]);
    arrFinish[j].push('ay');
    arrFinish[j].shift();
}
let array = [];
for (let l = 0; l < arrFinish.length; l++) {
    let num = arrFinish[l].join('');
    array.push(num);
}

let finish = array.join(' ');
return finish;
}

console.log(pigIt('hello this world'));