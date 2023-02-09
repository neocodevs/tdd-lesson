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

export const splitList = (list: number[]) => {
  const needle = Math.ceil(list.length / 2);

  const leftSide = list.slice(0, needle);
  const rightSide = list.slice(needle);

  return { leftSide, rightSide };
};

export const getContainingSideAndOffset = (value: number, list: number[]) => {
  const { leftSide, rightSide } = splitList(list);

  const isValueFoundInLeftSide = value === leftSide[leftSide.length - 1];
  const valueIsInLeftSide = value <= leftSide[leftSide.length - 1];

  if (isValueFoundInLeftSide)
    return { found: true, position: leftSide.length - 1 };

  return valueIsInLeftSide
    ? { splittedList: leftSide, offset: 0 }
    : { splittedList: rightSide, offset: leftSide.length };
};

export const getIndexInList = (
  value: number,
  list: number[],
  offset = 0
): number => {
  let result = getContainingSideAndOffset(value, list);

  if (result.found) {
    return offset + result.position;
  }

  if (
    result.splittedList?.length === 1 &&
    result.splittedList[0] !== value &&
    !result.found
  ) {
    return -1;
  }

  return getIndexInList(
    value,
    result.splittedList as number[],
    offset + (result.offset as number)
  );
};
