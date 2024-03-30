// Merges two already sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// merge([1, 4], [2, 3, 5]);
// results = [1, 2, 3, 4, 5]

// Recursive Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10, 24, 76, 73]);

// mergeSort([10, 24, 76, 73])
// mid = 2
// left = mergeSort(10, 24)
// right = mergeSort(76, 73)
// return merge(mergeSort(10, 24), mergeSort(76, 73))

// mergeSort([10, 24])
// mid = 1
// left = mergeSort(10) => [10]
// right = mergeSort(24) => [24]
// return merge([10], [24]) => [10, 24]

// mergeSort([76, 73])
// mid = 1
// left = mergeSort(76) => [76]
// right = mergeSort(73) => [73]
// return merge([76], [73]) => [73, 76]