const sameFrequency = (num1, num2) => {
  let num1String = num1.toString();
  let num2String = num2.toString();
  if (num1String.length !== num2String.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of num1String) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of num2String) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
