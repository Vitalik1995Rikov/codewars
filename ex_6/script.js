function repeatStr(number, str) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(str);
    }
    return arr.join('');
}

console.log(repeatStr(3, 'text'));