function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) { // base case
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
// helper([1, 2, 3, 4, 5, 6, 7, 8, 9]) => result = [1]
// helper([2, 3, 4, 5, 6, 7, 8, 9])
// helper([3, 4, 5, 6, 7, 8, 9]) => result = [1, 3]
// helper([4, 5, 6, 7, 8, 9])
// helper([5, 6, 7, 8, 9]) => result = [1, 3, 5]
// helper([6, 7, 8, 9])
// helper([7, 8, 9]) => result = [1, 3, 5, 7]
// helper([8, 9])
// helper([9]) => result = [1, 3, 5, 7, 9]
// helper([]) => return
// return [1, 3, 5, 7, 9]

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
