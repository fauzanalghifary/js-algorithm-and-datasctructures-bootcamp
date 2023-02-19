/*  How to solve a problem

1. Understand the problem

can I restate the problem in my own words?
What are the input?
What are the outputs?
Can the outputs be determined from the inputs?
How should I label the impotant pieces of data that are part of the problem?

2. Come up with concrete examples

Start with simple examples
Progress to more complex examples
Explore examples with empty inputs
Explore examples with invalid inputs
Explore another edge cases

3. Break it down

Explicitly write out the steps you need to take (worries later about the syntax)

4. Solve or simplify

Solve the problem. If you can't, solve the simpler problem (worries later about complexity or edge cases).

5. Look back and refactor

It is a missed opportunity if you don't take the time to look at your code, look back, and reflect on it.

can you check the result?
can you derive the result differently?
can you understand it at a glance?
can you use the result or method for some other problem?
can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem?

*/

function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    } return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&    //numeric 0-9
        !(code > 64 && code < 91) &&    //upper alpha (A-Z)
        !(code > 96 && code < 123)) {   //lower alpha (a-z)
        return false;
    } return true;
}




/* How Do You Improve?

1. Devise a plan for solving problem
2. Master common problem solving patterns

*/



/* Frequency Counters

Use objects or sets to collect values/frequencies of values.
Used to avoid the need for nested loop

*/


// pojan's own solution
function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let element1 of arr1) {
        for (let i = 0; i < arr2.length; i++) {
            if (element1 ** 2 === arr2[i]) {
                arr2.splice(i, 1);
            }
        }
    }
    if (arr2.length === 0) {
        return true;
    } return false;
}

// Colt's solution  O(n^2)
function same2(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;

}

// Colt's solution O(n) TWO SEPARATE LOOPS IS BETTER THAN NESTED LOOPS

function same3(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        // if(frequencyCounter1[val]){
        //     frequencyCounter1[val] += 1;
        //  } else {
        //     frequencyCounter1[val] = 1;
        //  }
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

