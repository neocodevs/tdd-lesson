import {
  getIndexInArray,
  splitArray,
  getContainingSideAndOffset,
} from "./kata";
import hugeArray from "./sorted-numbers.json";

describe("regarding the getIndexInArray function", () => {
  const originalArray = [2, 4, 6, 8, 10];
  describe("given the number 2 and an array of numbers containing it", () => {
    it("should return 0", () => {
      const expectedResult = 0;
      const result = getIndexInArray(2, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 6 and an array of numbers containing it", () => {
    it("should return 2", () => {
      const expectedResult = 2;
      const result = getIndexInArray(6, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 8 and an array of numbers containing it", () => {
    it("should return 3", () => {
      const expectedResult = 3;
      const result = getIndexInArray(8, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 10 and an array of numbers containing it", () => {
    it("should return 4", () => {
      const expectedResult = 4;
      const result = getIndexInArray(10, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given an array of numbers that does not contain the value", () => {
    it("should return -1", () => {
      const expectedResult = -1;
      const result = getIndexInArray(1, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 11 and an array of numbers containing it", () => {
    it("should return 99999", () => {
      const searchValue = 100001;
      const expectedResult = 99999;
      const result = getIndexInArray(searchValue, hugeArray);

      expect(result).toEqual(expectedResult);
      expect(hugeArray[expectedResult]).toEqual(searchValue);
    });
  });
});

describe("regarding the splitArray function", () => {
  describe("given an array of numbers", () => {
    it("should return an object containing the original array splitted in two halves", () => {
      const originalArray = [2, 4, 6, 8, 10];
      const originalArray2 = [4, 6, 8, 10];

      const expectedResult = {
        leftSide: [2, 4, 6],
        rightSide: [8, 10],
      };
      const result = splitArray(originalArray);

      const expectedResult2 = {
        leftSide: [4, 6],
        rightSide: [8, 10],
      };
      const result2 = splitArray(originalArray2);

      expect(result).toEqual(expectedResult);
      expect(result2).toEqual(expectedResult2);
    });
  });
});

describe("regarding the getContainingSideAndOffset function", () => {
  describe("given a number that must be in the left side of an array containing it", () => {
    it("should return the splitted array containing the value and an offset of 0", () => {
      const originalArray = [2, 4, 6, 8, 10];
      const expectedResult = { splittedArray: [2, 4, 6], offset: 0 };
      const result = getContainingSideAndOffset(4, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given a number that must be in the left side of an array containing it and the last one of this half", () => {
    it("should return the position of the expected value", () => {
      const originalArray = [2, 4, 6, 8, 10];
      const expectedResult = { found: true, position: 2 };
      const result = getContainingSideAndOffset(6, originalArray);

      expect(result).toEqual(expectedResult);
    });
  });
});
