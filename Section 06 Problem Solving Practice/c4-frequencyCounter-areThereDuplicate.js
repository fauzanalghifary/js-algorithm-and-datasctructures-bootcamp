function areThereDuplicates(...args) {
  let obj = {};

  for (let val of args) {
    if (obj[val]) {
      return true;
    }
    obj[val] = "true";
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
