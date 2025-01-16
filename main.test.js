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
