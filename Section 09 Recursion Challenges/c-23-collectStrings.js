function collectStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      collectStrings(obj[key], arr);
    } else if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
  }
  return arr;
}

console.log(collectStrings({})); // []
console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: { info: "bar", moreInfo: { evenMoreInfo: { weMadeIt: "baz" } } },
      },
    },
  })
); // ["foo", "bar", "baz"])
console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: { info: "bar", moreInfo: { evenMoreInfo: { weMadeIt: "baz" } } },
      },
    },
    moreStuff: "foo2",
    moreData: {
      val: {
        thing2: {
          info: "bar2",
          moreInfo: { evenMoreInfo: { weMadeIt: "baz2" } },
        },
      },
    },
  })
); // ["foo", "bar", "baz", "foo2", "bar2", "baz2"])
