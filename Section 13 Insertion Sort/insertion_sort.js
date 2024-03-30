function insertionSort(arr) {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);

// i = 1;
// current = 1
//      j = 0; j >=0 && arr[0] > current; => arr[1] = arr[0] = 2 => [2, 2, 9, 76, 4]
//      j = -1; j >= 0 && arr[0] > current; => break;
//      arr[0] = current ===> [1, 2, 9, 76, 4]

// i = 2
// current = 9
//      j = 1; j >= 0 && arr[1] > current; => break;
//      arr[2] = current ===> [1, 2, 9, 76, 4]

// i = 3
// current = 76
//      j = 2; j >= 0 && arr[2] > current; => break;
//      arr[3] = current ===> [1, 2, 9, 76, 4]

// i = 4
// current = 4
//      j = 3; j >= 0 && arr[3] > current; => arr[4] = arr[3] = 76 => [1, 2, 9, 76, 76]
//      j = 2; j >= 0 && arr[2] > current; => arr[3] = arr[2] = 9 => [1, 2, 9, 9, 76]
//      j = 1; j >= 0 && arr[1] > current; => break;
//      arr[2] = current ===> [1, 2, 4, 9, 76]