function findDoubl(arr) {
  arr.sort((a, b) => a - b);
  let count = arr.length;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        arr.splice(i + 1, 1);
      }
    }
  }
  for (let i = 0; i < count - arr.length; i++) {
    arr.push('_');
  }
  return arr;
}

console.log(findDoubl([1, 2, 4, 3, 4, 2, 4, 2]));
