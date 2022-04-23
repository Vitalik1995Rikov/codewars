function removeElement(arr, num) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

console.log(removeElement([1, 2, 3, 4, 2, 5, 2, 1, 5], 2));
