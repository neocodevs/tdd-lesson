/* 
  A binary chop (sometimes called the more prosaic binary search) finds the position of value in a sorted array of values. 
  It achieves some efficiency by halving the number of items under consideration each time it probes the values: 
  in the first pass it determines whether the required value is in the top or the bottom half of the list of values. 
  In the second pass in considers only this half, again dividing it in to two. 
  It stops when it finds the value it is looking for, or when it runs out of array to search 
*/

/* 
  Write a function that solves the binary search problem. 
  It must accept a number as first argument and an array of sorted numbers as the second argument.
  It must return the position in the array where the first argument value is stored
  It must return -1 if the value is not inside the array
*/
export {};
