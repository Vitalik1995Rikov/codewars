function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    guess = arr[mid];
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.error('No number');
  return null;
}

let array = [0, 1, 3, 4, 7, 9, 12, 14, 17, 18, 20];

console.log(binarySearch(array, 1));
