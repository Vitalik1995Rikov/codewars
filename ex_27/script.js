function selectionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([2, 1, 4, 5]));
