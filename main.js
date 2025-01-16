// Write a function that takes an input year (from the start of the modern Olympic games in 1896)
// and returns either "Olympic year", "Winter Olympic year", or "Both Olympic and Winter Olympic year" (might have to Google the last one!)

// E.G: isModernOlympicYear(1896) should return "Olympic year"
// is ModernOlympicYear(1924) should return "Both Olympic and Winter Olympic year"

// If the input year is neither an Olympic or Winter Olympic Year, the function should throw an error with the message:
// "Error: Not either Olympic year"

// If a year was cancelled (due to WWI or WWII), then it should throw the error. Similarly, if it was postponed (like Tokyo 2020),
// then it should throw the error for the year that was cancelled, and should return "Olympic year" for the year that it was moved to

// While you could set up a database for me if you really wanted to, these anomalies can be hard-coded in your function for now
// Have fun! HAPPY HACKATHON <3

// export function isModernOlympicYear(year) {
//   if (year === 2026) {
//     return "Winter Olympic year";
//   } else if (year === 1924) {
//     return "Both Olympic and Winter Olympic year";
//   }
//   return "Olympic year";
// }

export function isModernOlympicYear(year) {
  const olympicChecker = 1992;
  const winterOlympicChecker = 1994;
  if (year === 2021) {
    return "Olympic year";
  } else if (year === 1916 || year === 1940 || year === 1944) {
    throw new Error("Error: Not either Olympic year");
  } else if (year >= 1994 && (year - winterOlympicChecker) % 4 === 0) {
    return "Winter Olympic year";
  } else if (
    year >= 1924 &&
    year <= 1992 &&
    (year - olympicChecker) % 4 === 0
  ) {
    return "Both Olympic and Winter Olympic year";
  } else if (year > 1994 && (year - olympicChecker) % 4 === 0) {
    return "Olympic year";
  } else if (year < 1924 && (year - olympicChecker) % 4 === 0) {
    return "Olympic year";
  } else {
    throw new Error("Error: Not either Olympic year");
  }
}
