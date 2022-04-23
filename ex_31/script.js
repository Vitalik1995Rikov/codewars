function findDoubl(arr) {
  let num = arr.length;
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        count++;
        arr.splice(i + 1, 1);
      }
    }
  }
  for (let i = 0; i < num - count; i++) {
    arr.push('_');
  }
  return arr;
}

console.log(findDoubl([1, 7, 1, 8, 2, 8, 6, 5]));
