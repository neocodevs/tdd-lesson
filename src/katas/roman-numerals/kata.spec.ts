import { convertDigitToRomanUnits, convertToRoman } from "./kata";

describe("regarding the convertDigitToRomanUnits function", () => {
  describe("given the number 0", () => {
    it("should return 0", () => {
      const expectedResult = "";
      const result = convertDigitToRomanUnits({
        number: 0,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 1", () => {
    it("should return I", () => {
      const expectedResult = "I";
      const result = convertDigitToRomanUnits({
        number: 1,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 2", () => {
    it("should return II", () => {
      const expectedResult = "II";
      const result = convertDigitToRomanUnits({
        number: 2,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 3", () => {
    it("should return III", () => {
      const expectedResult = "III";
      const result = convertDigitToRomanUnits({
        number: 3,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 4", () => {
    it("should return IV", () => {
      const expectedResult = "IV";
      const result = convertDigitToRomanUnits({
        number: 4,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 5", () => {
    it("should return V", () => {
      const expectedResult = "V";
      const result = convertDigitToRomanUnits({
        number: 5,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 6", () => {
    it("should return VI", () => {
      const expectedResult = "VI";
      const result = convertDigitToRomanUnits({
        number: 6,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 7", () => {
    it("should return VII", () => {
      const expectedResult = "VII";
      const result = convertDigitToRomanUnits({
        number: 7,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 8", () => {
    it("should return VIII", () => {
      const expectedResult = "VIII";
      const result = convertDigitToRomanUnits({
        number: 8,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 9", () => {
    it("should return IX", () => {
      const expectedResult = "IX";
      const result = convertDigitToRomanUnits({
        number: 9,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 10", () => {
    it("should return X", () => {
      const expectedResult = "";
      const result = convertDigitToRomanUnits({
        number: 10,
        unit: "I",
        five: "V",
        ten: "X",
      });

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("regarding the convertToRoman function", () => {
  describe("given the number 0", () => {
    it("should return 0", () => {
      const expectedResult = "out of range";
      const result = convertToRoman(0);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 1", () => {
    it("should return I", () => {
      const expectedResult = "I";
      const result = convertToRoman(1);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 2", () => {
    it("should return II", () => {
      const expectedResult = "II";
      const result = convertToRoman(2);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 3", () => {
    it("should return III", () => {
      const expectedResult = "III";
      const result = convertToRoman(3);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 4", () => {
    it("should return IV", () => {
      const expectedResult = "IV";
      const result = convertToRoman(4);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 5", () => {
    it("should return V", () => {
      const expectedResult = "V";
      const result = convertToRoman(5);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 6", () => {
    it("should return VI", () => {
      const expectedResult = "VI";
      const result = convertToRoman(6);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 7", () => {
    it("should return VII", () => {
      const expectedResult = "VII";
      const result = convertToRoman(7);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 8", () => {
    it("should return VIII", () => {
      const expectedResult = "VIII";
      const result = convertToRoman(8);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 9", () => {
    it("should return IX", () => {
      const expectedResult = "IX";
      const result = convertToRoman(9);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 10", () => {
    it("should return X", () => {
      const expectedResult = "X";
      const result = convertToRoman(10);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 11", () => {
    it("should return XI", () => {
      const expectedResult = "XI";
      const result = convertToRoman(11);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 12", () => {
    it("should return XII", () => {
      const expectedResult = "XII";
      const result = convertToRoman(12);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 13", () => {
    it("should return XIII", () => {
      const expectedResult = "XIII";
      const result = convertToRoman(13);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 14", () => {
    it("should return XIV", () => {
      const expectedResult = "XIV";
      const result = convertToRoman(14);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 15", () => {
    it("should return XV", () => {
      const expectedResult = "XV";
      const result = convertToRoman(15);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 16", () => {
    it("should return XVI", () => {
      const expectedResult = "XVI";
      const result = convertToRoman(16);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 17", () => {
    it("should return XVII", () => {
      const expectedResult = "XVII";
      const result = convertToRoman(17);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 18", () => {
    it("should return XVIII", () => {
      const expectedResult = "XVIII";
      const result = convertToRoman(18);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 19", () => {
    it("should return XIX", () => {
      const expectedResult = "XIX";
      const result = convertToRoman(19);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 20", () => {
    it("should return XX", () => {
      const expectedResult = "XX";
      const result = convertToRoman(20);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 33", () => {
    it("should return XXXIII", () => {
      const expectedResult = "XXXIII";
      const result = convertToRoman(33);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 49", () => {
    it("should return XLIX", () => {
      const expectedResult = "XLIX";
      const result = convertToRoman(49);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 99", () => {
    it("should return XCIX", () => {
      const expectedResult = "XCIX";
      const result = convertToRoman(99);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 100", () => {
    it("should return C", () => {
      const expectedResult = "C";
      const result = convertToRoman(100);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 159", () => {
    it("should return CLIX", () => {
      const expectedResult = "CLIX";
      const result = convertToRoman(159);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 592", () => {
    it("should return DXCII", () => {
      const expectedResult = "DXCII";
      const result = convertToRoman(592);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 3592", () => {
    it("should return MMMDXCII", () => {
      const expectedResult = "MMMDXCII";
      const result = convertToRoman(3592);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given the number 4000", () => {
    it("should return the 'out of range' message", () => {
      const expectedResult = "out of range";
      const result = convertToRoman(4000);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("given negative numbers", () => {
    it("should return the 'out of range' message", () => {
      const expectedResult = "out of range";
      const result = convertToRoman(-1);

      expect(result).toEqual(expectedResult);
    });
  });
});
