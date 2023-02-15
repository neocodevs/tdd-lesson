// Write a function to convert from normal numbers to Roman Numerals, using TDD, from 1 to 3999. eg: 1 -> I, 10 -> X, 7 -> VII...
// TIP: There is no ZERO representation nor negative values in Roman Numerals.

const unitLetters = {
  units: { unit: "I", five: "V", ten: "X" },
  tenths: { unit: "X", five: "L", ten: "C" },
  hundredths: { unit: "C", five: "D", ten: "M" },
  thousandths: { unit: "M", five: "", ten: "" },
};

export const convertDigitToRomanUnits = ({
  number,
  unit,
  five,
  ten,
}: {
  number: number;
  unit: string;
  five: string;
  ten: string;
}) => {
  if (!number || number > 9) return "";
  if (number <= 3) return unit.repeat(number);
  if (number === 4) return unit + five;
  if (number === 5) return five;
  if (number > 5 && number < 9) return five + unit.repeat(number - 5);
  if (number === 9) return unit + ten;
};

export const convertToRoman = (number: number) => {
  if (number > 3999 || number < 1) return "out of range";

  const digits = number.toString().split("");

  return digits.reduce((result, digit, index) => {
    const isUnits = index === digits.length - 1;
    const isTenths = index === digits.length - 2;
    const isHundredths = index === digits.length - 3;

    const unit = isUnits
      ? "units"
      : isTenths
      ? "tenths"
      : isHundredths
      ? "hundredths"
      : "thousandths";

    const nextDigit = convertDigitToRomanUnits({
      number: Number(digit),
      ...unitLetters[unit],
    });

    return result + nextDigit;
  }, "");
};
