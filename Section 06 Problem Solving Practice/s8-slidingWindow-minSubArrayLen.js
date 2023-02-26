const minSubArrayLen = (arr, sum) => {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

// arr.length = 6; sum = 7
// [2] => if => arr[end] = arr[0] = 2 => total = 2 => end = 1
// [3] => if => arr[end] => arr[1] = 3 => total = 5 => end = 2
// [1] => if => arr[end] => arr[2] => 1 => total = 6 => end = 3
// [2] => if => arr[end] => arr[3] => 2 => total = 8 => end = 4
// minLen = 4 => arr[start] => arr[0] = 2 => total = 6 => start = 1
// [4] => ...
// ...

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
