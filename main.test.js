import { test, expect } from "vitest";
import { isModernOlympicYear } from "./main.js";

// test("test test should pass", () => {});

test("isModernOlympicYear(1896) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 1896;
  const expected = "Olympic year";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2021) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 2021;
  const expected = "Olympic year";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2026) should return 'Winter Olympic year'", () => {
  //arrange
  const inputYear = 2026;
  const expected = "Winter Olympic year";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(1924) should return 'Both Olympic and Winter Olympic year'", () => {
  //arrange
  const inputYear = 1924;
  const expected = "Both Olympic and Winter Olympic year";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2004) should return 'Olympic year'", () => {
  //arrange
  const inputYear = 2004;
  const expected = "Olympic year";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(1940) should return 'Error'", () => {
  //arrange
  const inputYear = 1940;
  const expected = "Error";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});

test("isModernOlympicYear(2019) should return 'Error'", () => {
  //arrange
  const inputYear = 2019;
  const expected = "Error";

  //act
  const result = isModernOlympicYear(inputYear);

  //assert
  expect(result).toBe(expected);
});
