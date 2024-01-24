function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (const element of arr1) {
        let correctIndex = arr2.indexOf(element ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
