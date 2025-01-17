import { describe, test, expect } from "vitest";
import { isModernOlympicYear } from "./main.js";

// test("test test should pass", () => {});

const both = "Both Olympic and Winter Olympic year";
const olympic = "Olympic year";
const winterOlympic = "Winter Olympic year";

test("isModernOlympicYear(1896) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 1896;
  const expected = olympic;

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2021) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 2021;
  const expected = olympic;

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2026) should return 'Winter Olympic year'", () => {
  //arrange
  const inputYear = 2026;
  const expected = winterOlympic;

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2004) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 2004;
  const expected = olympic;

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2032) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 2032;
  const expected = olympic;

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test.each([
  [1924, both],
  [1928, both],
  [1932, both],
  [1936, both],
  [1948, both],
  [1952, both],
  [1956, both],
  [1960, both],
  [1964, both],
  [1968, both],
  [1972, both],
  [1976, both],
  [1980, both],
  [1984, both],
  [1988, both],
  [1992, both],
])(
  `isModernOlympicYear(%i) should return 'Both Olympic and Winter Olympic year'`,
  (input, expected) => {
    expect(isModernOlympicYear(input)).toBe(expected);
  }
);

describe("Invalid years/non-year inputs", () => {
  test("isModernOlympicYear(1940) should throw error", () => {
    //arrange
    const inputYear = 1940;

    //act and assert
    expect(() => isModernOlympicYear(inputYear)).toThrowError(
      "Error: Not either Olympic year"
    );
  });

  test("isModernOlympicYear(2001) should throw error", () => {
    //arrange
    const inputYear = 2001;

    //act and assert
    expect(() => isModernOlympicYear(inputYear)).toThrowError(
      "Error: Not either Olympic year"
    );
  });

  test("isModernOlympicYear('testString') should throw error", () => {
    //arrange
    const inputYear = "testString";

    //act and assert
    expect(() => isModernOlympicYear(inputYear)).toThrowError(
      "Error: Not either Olympic year"
    );
  });
});

describe("Fringe cases where Olympiad years change into current system", () => {
  test("isModernOlympicYear(1994) should return 'Winter Olympic year'", () => {
    //arrange
    const inputYear = 1994;
    const expected = winterOlympic;

    //act
    const result = isModernOlympicYear(inputYear);

    //assert
    expect(result).toBe(expected);
  });

  test("isModernOlympicYear(1996) should return 'Olympic year'", () => {
    //arrange
    const inputYear = 1996;
    const expected = olympic;

    //act
    const result = isModernOlympicYear(inputYear);

    //assert
    expect(result).toBe(expected);
  });
});
