## WHY Big O Notation?

- Imagine we have multiple implementations of the same functions
- How can we determine which one is the "best" ?
- BIG O NOTATION!

## WHO cares?

- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- Identifying inefficient code
- It comes up in interviews! (?)

## What Does Better Mean?

- Faster ?
- Less memory-intensive?
- More readable?

## The Problem with Time

- Different machines will record different times
- For fast algorithms, speed measurements may not be precise enough

- Rather than counting seconds, LET'S count the NUMBER of simple operations the computer has to perform

## Big O

- how the runtime of an algorithm grows as the inputs grow

- O(1) => No change
- O(n) => Linear
- O(n^2) => Quadratic

- constant don't matter
  - O(2n) => O(n)
  - O(500) => O(1)
- smaller terms don't matter
  - O(n+10) => O(n)
  - O(1000n+50) => O(n)
  - O(n^2 + 5n + 8) => O(n^2)
- arithmetic operations are constant
- variable assignment is constant
- accessing elements in an array (by index) or object (by key) is constant
- in a loop, the complexity is the length of the loop TIMES the complexity of whatever happens inside of the loop

## Space Complexity

- time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?
- space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm

- most primitives are constant space
- string require O(n) space (where n is the string length)
- references types are generally O(n), where n is the length
