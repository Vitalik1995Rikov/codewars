function findStr(str, needle) {
  let arrOne = str.split('');
  let arrTwo = needle.split('');
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] == arrTwo[0]) {
      if (arrOne[i + 1] == arrTwo[1]) {
        return true;
      }
    }
  }
}

console.log(findStr('qwerty', 'er'));
