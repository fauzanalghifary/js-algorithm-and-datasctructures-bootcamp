## What is recursion?

- a process that calls itself

## Why use recursion?

- it's everywhere!
  - JSON.parse / JSON.stringify
  - document.getElementById and DOM traversal algorithms
  - Object traversal
- to solve problems that can be broken down into smaller versions of the same problem

## The call stack

- a stack data structure
- any time a function is invoked it is placed (pushed) on the top of the call stack
- when JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

- when we write recursive functions, we keep pushing new functions onto the call stack!
- when the function returns, it is popped off the stack
- when the call stack is empty, the program terminates
- the call stack is synchronous
- the call stack is single threaded

## Two essential parts of a recursive function

- base case ==> the condition when the recursion ends
- different input ==> the input is different each time

## Recursive Pitfalls

- no base case
- forgetting to return or returning the wrong thing
