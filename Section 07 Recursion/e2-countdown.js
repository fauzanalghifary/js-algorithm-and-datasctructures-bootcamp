// Recursive Version
function countDownRecursive(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDownRecursive(num);
}

// Iterative Version
function countDownIteration(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!");
}

countDownRecursive(13);