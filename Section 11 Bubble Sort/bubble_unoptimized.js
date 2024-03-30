// // UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([8, 1, 4, 5]));

// j = 0; 8 > 1 => true => swap(arr, 0, 1) => [1, 8, 4, 5]
// j = 1; 8 > 4 => true => swap(arr, 1, 2) => [1, 4, 8, 5]

// Big O => O(n^2)
// input = 2 => 4 operation
// input = 3 => 9 operation
