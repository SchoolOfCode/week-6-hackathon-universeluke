# => ONLY VIEW answer.js IF STUCK <=

# Make sure to:

    npm install (and optionally run the coverage script if wanting to view vitest's coverage)

    Only edit the main.js file. This is where you can find the specific instructions of this kata, and the skeleton of the function that you will need to write.

# The story of this kata

    In our team, we decided to have a general theme of sports things (functions to work out valid configurations of a team, return what happened in a specific year, etc.). We came up with a few potential functions that we could do a kata for, with varying degrees of difficulty. I chose to do a more mathematical kata (as I wouldn't know where to start with football team setups!), and so my kata's function should return whether or not an inputted year is an Olympic, Winter Olympic, both, or neither year.

    I chose this because I initially had an idea of how the function could look (working out if the year is valid by checking 1896 + any multiple of 4, etc), but dealing with the anomaly years would also have to be implemented alongside these calculations, and so it creates an interesting complexity to the function's requirements.

    We reaaaaaaally didn't want to have set up a database that the function should pull from for any of our team's katas, and so I've added a note in the main.js to mention that anomalies in Olympic years can be hard coded in (even though this isn't the IDEAL solution to the requirements of a real-world function like this, as it would likely want to pull from an existing and up-to-date datebase).

# Deciding what the tests will require from the function

    I began by writing the codewars-esque description of what the function needs to do, and in writing this, decided on what the tests will test for. I decided that the function should return one of 3 possible strings, and otherwise should throw an error "Error: Not either Olympic year". We decided as a team that handling incorrect inputs and expecting errors would be a stretch goal, and so I first tackled writing tests for the correct inputs returning the correct strings.

    Other stretch goals we decided on would be things like testing for case sensitivity, and accounting for misspelt inputs. Because the inputs will only be numbers, I won't need to test for case sensitivity, but could definitely test for non-number inputs. We also initially would've liked to create a frontend and created playwright tests, however were advised against this, and so this is a very distant stretch goal.

# Writing the tests

    Because the final product is the tests for this hackathon, I realised that we're sort of doing TDD and then (Function?)DD again, as we write the tests to say what the function is doing, and then test that the tests pass by writing a passing function, even though we don't actually need the function in the final product! I worked my way through these tests, passing them by adding to the function as I go.

![First Function](/firstfunction.png "First Function")

---

![First Test](/firsttest.png "First Test")

    I bounced between writing a test, and adding to the function until it passed, then writing another test. After completing this loop 3/4 times, I found myself at the point where I needed most of the function's functionality in place in order to pass all of the tests, and so began writing more maths into the functions, and broadening what tests it would pass.

![Second Function](/secondfunction.png "Second Function")

    In order to cover a large number of potential inputs, I decided to test all valid inputs to return both olympic and winter years using the test.each method, which saved a lot of time in rewriting entire tests for a single new year input. I also discovered through reading the vitest docs, that it is possible (using %i) to interpolate inputs into the title of tests using test.each, and so was able to accurately what each iteration of test.each was doing in the titles of the tests.

![test.each Interpolation](/testeachinterpolation.png "test.each Interpolation")

![test.each Titles](/testeachtitles.png "test.each Titles")

    After this, I decided to add certain tests into describe blocks, in order to more clearly break down what tests were testing what (both in the test code, and in the tests that get shown in the console for the bootcamper attempting the kata).

# Invalid inputs

    I ran into an issue when trying to test for the function throwing an error on invalid inputs, or for years that were not Olympic years, as I was throwing two different errors, and not expecting the correct error in the test. As a result, the test was expecting null and receiving undefined, and so it took an embarrassing amount of time to notice what was happening! Having finished this test, I though that I'd got enough test coverage, however wanted a way to see exactly how much coverage I had.

# Coverage report

    After speaking with my mentor, I found out about vitest's coverage report ability, and so created a script to run the coverage checker on my tests.
    Running it for the first time:

![First Coverage Report](/coveragereport1.png "First Coverage Report")

    This was great, as not only did it show me that most of the lines of the function were covered, but it also showed me that I was never testing the second error throw of the function. After writing another test, the coverage then was 100%.

![Second Coverage Report](/coveragereport2.png "Second Coverage Report")

    My mentor Peter, however, warned me about relying 100% on coverage reports. This was because a test could be written lazily to always pass, while still passing over lines of the code. In this case, the test would pass, and the coverage would still be 100%, however the code could break and still pass the tests - obviously not ideal. Peter explained that, because of this, it's always beneficial to have someone else look over tests (ideally someone who isn't then writing the code)

    After this report, I decided that I had most likely done enough for the kata to work as desired, and so was keen to let some fellow bootcampers test it out the following day!

# Feedback from bootcampers
