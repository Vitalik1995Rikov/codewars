function numberDown(number) {
    let str = number.toString();
    let arr = Array.from(str);
    let arrSort = arr.sort((a, b) => b - a);
    let num = arrSort.join('');
    let numFinish = Number(num);

    return numFinish;
}

console.log(numberDown(1329));