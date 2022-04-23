function removeElement(arr, num) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      newArr[j] = arr[i];
      j++;
    }
  }
  console.log(newArr);
}

removeElement([1, 2, 3, 4, 2, 5, 2, 1, 5], 2);
