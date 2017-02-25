QuickSort
------
QuickSort is an efficient sorting algorithm that utilizes the divide-and-conquer paradigm
##### How It Works
1. Given an array `items`, randomly select a `pivot`
2. Using the pivot, divide array into 3 sections (section consisting of values < `pivot`, section consisting of just `pivot`, section consisting of values > `pivot`)
3. Recursively sort the 1st and 3rd sub-sections of the array



##### Performance
* Has an optimal best and average case **O(nlgn)** but unlikely poor worst case **O(n^2)**
  * Worst occurs when each call of QuickSort produces a maximally unbalanced subproblem with **n-1** elements and one with **0** elements

##### Nuances of This Implementation
* Not stable (Other implementations of QuickSort are)
* In-place (Other implementations of QuickSort aren't)
* This implementation uses randomly selected pivots for better performance

