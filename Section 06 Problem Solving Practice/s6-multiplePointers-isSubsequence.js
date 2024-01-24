function isSubsequence(str1, str2) {
    let index1 = 0;

    for (const element of str2) {
        if (element === str1[index1]) {
            index1++;
        }
    }

    return index1 === str1.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("sing", "stin")); // false
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
