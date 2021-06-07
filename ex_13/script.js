function anagram(str1, str2) {
    let a = true;
    let low1 = str1.toLowerCase();
    let low2 = str2.toLowerCase();
    let arr1 = low1.split('');
    let arr2 = low2.split('');
    let sort1 = arr1.sort();
    let sort2 = arr2.sort();
    for (let i = 0; i < sort1.length; i++) {
        if (sort1[i] == sort2[i]) {
            a = true;
        } else {a = false}
    }
    return a;
}

console.log(anagram('text', 'text'));