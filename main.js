// Write a function that takes an input year (from the start of the modern Olympic games in 1896)
// and returns either "Olympic year", "Winter Olympic year", or "Both Olympic and Winter Olympic year" (might have to Google the last one!)
// https://en.wikipedia.org/wiki/List_of_Olympic_Games_host_cities

// E.G: isModernOlympicYear(1896) should return "Olympic year"
// isModernOlympicYear(1924) should return "Both Olympic and Winter Olympic year"

// If the input year is neither an Olympic or Winter Olympic Year, the function should throw an error with the message:
// "Error: Not either Olympic year"

// If a year was cancelled (due to WWI or WWII), then it should throw the error. Similarly, if it was postponed (like Tokyo 2020),
// then it should throw the error for the year that was cancelled, and should return "Olympic year" for the year that it was moved to.
// While you could set up a database for me if you really wanted to, these anomalies can be hard-coded in your function for now

// Your function should also give either "Oympic year" or "Winter Olympic year" for any future years that also fall in the 4-year-gap pattern
// Have fun! HAPPY HACKATHON <3

export function isModernOlympicYear(year) {}
