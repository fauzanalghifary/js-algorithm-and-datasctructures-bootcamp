// function findLongestSubstring(str) {
//   if (str.length === 0) return 0;
//   let start = 0;
//   let end = 0;
//   let longest = 0;
//   let obj = {};

//   while (start < str.length) {
//     if (!obj[str[end]] && end < str.length) {
//       longest = Math.max(longest, end - start);
//       obj[str[end]] = 1;
//       end++;
//     } else {
//       start++;
//       end = start;
//       obj = {};
//     }
//   }

//   return longest + 1;
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7 rithmsc
console.log(findLongestSubstring("thisisawesome")); // 6 awesom
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1 b
console.log(findLongestSubstring("longestsubstring")); // 8 ubstring
console.log(findLongestSubstring("thisishowwedoit")); // 6 wedoit
