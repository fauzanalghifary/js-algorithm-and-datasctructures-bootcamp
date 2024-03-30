function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// getDigit(7329, 0) => 9
// getDigit(7329, 1) => 2
// getDigit(7329, 2) => 3
// getDigit(7329, 3) => 7
// getDigit(7329, 4) => 0
// getDigit(7329, 5) => 0

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(1) => 1
// digitCount(25) => 2
// digitCount(314) => 3

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// mostDigits([1234, 56, 7]) => 4
// mostDigits([1, 1, 11111, 1]) => 5
// mostDigits([12, 34, 56, 78]) => 2

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        // [[], [], [], [], [], [], [], [], [], []]
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        // [[], [12, 9852], [23], [], [345, 2345], [], [], [5467], [], []]
        nums = [].concat(...digitBuckets);
        // [12, 9852, 23, 345, 2345, 5467]
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])








