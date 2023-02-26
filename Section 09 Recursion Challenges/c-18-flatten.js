function flatten(array) {
  if (array.length === 0) return [];
  let result = [];
  for (let num of array) {
    if (Array.isArray(num)) {
      result = result.concat(flatten(num));
    } else {
      result.push(num);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
