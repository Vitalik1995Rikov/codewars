function bubleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        let n = array[i];
        array[i] = array[i + 1];
        array[i + 1] = n;
      }
    }
  }
  return array;
}

console.log(bubleSort([1, 2, 3, 4, 5, 6, 7, 8]));
