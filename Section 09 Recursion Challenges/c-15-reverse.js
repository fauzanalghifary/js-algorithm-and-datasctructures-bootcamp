function reverse(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
