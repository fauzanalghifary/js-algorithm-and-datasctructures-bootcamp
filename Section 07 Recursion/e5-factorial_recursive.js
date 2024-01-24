function factorial(num) {
    if (num < 2) return 1;
    return num * factorial(num - 1);
}
