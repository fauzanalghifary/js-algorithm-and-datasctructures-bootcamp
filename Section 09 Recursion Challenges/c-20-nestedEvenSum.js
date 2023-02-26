const nestedEvenSum = (obj) => {};

console.log(nestedEvenSum({})); // 0
console.log(nestedEvenSum({ outer: 2 })); // 2
console.log(
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: { superInner: 2, notANumber: true, alsoNotANumber: "yup" },
    },
  })
); // 6
console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
); // 10
