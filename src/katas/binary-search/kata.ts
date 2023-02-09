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
export const getIndexInArray = (
  value: number,
  array: number[],
  offset = 0
): number => {
  let result = getContainingSideAndOffset(value, array);

  if (result.found) {
    return offset + result.position;
  }

  if (
    result.splittedArray?.length === 1 &&
    result.splittedArray[0] !== value &&
    !result.found
  ) {
    return -1;
  }

  return getIndexInArray(
    value,
    result.splittedArray as number[],
    offset + (result.offset as number)
  );
};

export const splitArray = (list: number[]) => {
  const half = Math.ceil(list.length / 2);

  const leftSide = list.slice(0, half);
  const rightSide = list.slice(half);

  return { leftSide, rightSide };
};

export const getContainingSideAndOffset = (value: number, array: number[]) => {
  const { leftSide, rightSide } = splitArray(array);

  const valueIsInLeftSide = value <= leftSide[leftSide.length - 1];
  const valueIsFound = value === leftSide[leftSide.length - 1];

  if (valueIsFound) return { found: true, position: leftSide.length - 1 };

  return valueIsInLeftSide
    ? { splittedArray: leftSide, offset: 0 }
    : { splittedArray: rightSide, offset: leftSide.length };
};
