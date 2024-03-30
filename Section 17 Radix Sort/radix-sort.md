## Radix Sort

- Not Making Comparisons!
- Only works with numbers

## Pseudocode

- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit
- Replace the existing array with values in our buckets, starting with 0 and going up to 9
- Return list at the end!

## Big O Complexity

- Time Complexity: O(nk)
- Space Complexity: O(n + k)