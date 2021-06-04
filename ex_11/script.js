function findVowels(str) {
    let arr = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (value of arr) {
        if (vowels.includes(value)) {
            count++;
        }
    }
    return count;
}

console.log(findVowels('text in computer'));