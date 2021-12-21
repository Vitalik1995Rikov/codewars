function friend(arr) {
    let arrNew = [];
    arr.forEach(element => {
        if (element.length == 4) {
            arrNew.push(element)
        }
    });
    return arrNew;
}

console.log(friend(['aaaa', 'bbbbb']))
