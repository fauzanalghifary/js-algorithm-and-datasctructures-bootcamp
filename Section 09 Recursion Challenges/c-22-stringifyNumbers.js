function stringifyNumbers(obj, newObj = {}) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(stringifyNumbers({num: 1, test: []})); // {num: "1", test: []}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

console.log(stringifyNumbers(obj)); // {num: "1", test: [], data: {val: "4", info: {isRight: true, random: "66"}}}
