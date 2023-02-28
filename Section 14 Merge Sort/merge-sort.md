## Merge Sort

- Merge sort is a divide and conquer algorithm.
- It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
- The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

- big O notation: O(n log n)
