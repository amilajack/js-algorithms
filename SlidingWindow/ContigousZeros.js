// Given a binary array, find the maximum number of zeros in an array by flipping only one
// subarray of your choice. A flip operation switches all 0s to 1s and 1s to 0s.

// Input :  arr[] = {0, 1, 0, 0, 1, 1, 0}
// Output : 6
// We can get 6 zeros by flipping the subarray {1, 1}

// Input :  arr[] = {0, 0, 0, 1, 0, 1}
// Output : 5

// Naive Approach:
// Keep track of the max number of zeros so far. Then consider each subrarray `s` of the given array. For each `s`,
// if the
