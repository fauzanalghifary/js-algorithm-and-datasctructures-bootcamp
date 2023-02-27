const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  let middle = left + Math.round((right - left) / 2);
  while (left < right) {
    if (array[middle] === num) {
      return middle;
    } else if (array[middle] < num) {
      left = middle;
      middle = left + Math.ceil((right - left) / 2);
    } else if (array[middle] > num) {
      right = middle;
      middle = left + Math.floor((right - left) / 2);
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // 8
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
