function toJadenCase(str) {
    // split by words, upperCase first letter in each word, + another part of letter
    let arr = str.split(' ').map(element => element[0].toUpperCase() + element.slice(1));
    // join by _
    let newStr = arr.join(' ');
    console.log(newStr);
}

toJadenCase('a bb ccc hello my friends');