const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let count = 1;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[index]) {
      count++;
      index = i;
    }
  }

  console.log(count);
  return count;
};

// count = 1; index = 0

//i0 1 1 => NO CHANGE
//i1 2 1 => count = 2; index = 1;
//i2 3 2 => count = 3; index = 2;
//i3 4 3 => count = 4; index = 3;
//i4 4 4 => NO CHANGE
//i5 4 4 => NO CHANGE
//i6 7 4 => count = 5; index = 6;
//i7 7 7 => NO CHANGE
//i8 12 7 => count = 6; index = 8
//i9 12 12 => NO CHANGE
//i10 13 12 => count = 7; index = 9;

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
