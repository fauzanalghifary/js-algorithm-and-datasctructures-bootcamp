function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

//  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]) => [1].concat(collectOddValues([2, 3, 4, 5, 6, 7, 8, 9]))
// collectOddValues([2, 3, 4, 5, 6, 7, 8, 9]) => [].concat(collectOddValues([3, 4, 5, 6, 7, 8, 9]))
// collectOddValues([3, 4, 5, 6, 7, 8, 9]) => [3].concat(collectOddValues([4, 5, 6, 7, 8, 9]))
// collectOddValues([4, 5, 6, 7, 8, 9]) => [].concat(collectOddValues([5, 6, 7, 8, 9]))
// collectOddValues([5, 6, 7, 8, 9]) => [5].concat(collectOddValues([6, 7, 8, 9]))
// collectOddValues([6, 7, 8, 9]) => [].concat(collectOddValues([7, 8, 9]))
// collectOddValues([7, 8, 9]) => [7].concat(collectOddValues([8, 9]))
// collectOddValues([8, 9]) => [].concat(collectOddValues([9]))
// collectOddValues([9]) => [9].concat(collectOddValues([]))
// collectOddValues([]) => return []

collectOddValues([1, 2, 3, 4, 5])
                                        
                                                                
                                                                             
                            
            