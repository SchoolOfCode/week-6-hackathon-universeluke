# The story of this test

    We decided to have a general theme of sports things (functions to work out valid configurations of a team, return what happened in a specific year, etc.). We came up with a few potential functions that we could do a kata for, with varying degrees of difficulty. I chose to do a more mathematical kata, and so my kata's function should return whether or not an inputted year is an Olympic, Winter Olympic, both, or neither year.

    I chose this because I initially had an idea of how the function could look (working out if the year is valid by checking 1896 + any multiple of 4, etc), but dealing with the anomaly years would also have to be implemented alongside these calculations, and so it creates an interesting complexity to the function's requirements.

    We reaaaaaaally didn't want to have set up a database that the function should pull from for any of our team's katas, and so I've added a note in the main.js to mention that anomalies in Olympic years can be hard coded in (even though this isn't the IDEAL solution to the requirements of a real-world function like this, as it would likely want to pull from an existing and up-do-date datebase).

# Deciding what the tests will require from the function

    I began by writing the codewars-esque description of what the function needs to do, and in writing this, decided on what the tests will test for. I decided that the function should return one of 3 possible strings, and otherwise should throw an error "Error: Not either Olympic year". We decided as a team that handling incorrect inputs and expecting errors would be a stretch goal, and so I first tackled writing tests for the correct inputs returning the correct strings.

    Other stretch goals we decided on would be things like testing for case sensitivity, and accounting for misspelt inputs. These will be things that I try to test for later. We also initially would've liked to creata a frontend and created playwright tests, however were advised against this, and so this is a very distant stretch goal.

# Writing the tests

    Because the final product is the tests for this hackathon, I realised that we're sort of doing TDD and TDD again, as we write the tests to say what the function is doing, and then tests that the tests pass by writing a passing function, even though we don't actually need the function in the final product! I worked my way through these tests, passing them by adding to the function as I go.

![First Function](/firstfunction.png "First Function")

---

![First Test](/firsttest.png "First Test")
