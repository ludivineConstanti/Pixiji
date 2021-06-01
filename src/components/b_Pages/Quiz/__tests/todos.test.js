test('dummy', () => {});

test.todo('initial state + after clicking on next button');
/*
// There should be the title
// The title should say which quiz it is and how many characters there are
// There should be a progress bar with a number of questions
- The square should be styled appropriately based on the current question number
- (one different style for past questions, current question, comming question)
// There should be a question
- There should be at least one right answer and one wrong answer
The text of the question and the right answer should correspond

// The next button should not be there

// The illustration should be there
// There should be as many main square that there is progress square

All the squares should be in their initial state (depending on question number)
Nothing should happen when you hover them

All the squares corresponding to questions that have been answered
should be in their activated state
Something should happen when you hover them
it should go back to it's initial state when you stop hovering

Something should happen if you hover the answer buttons
They should go back to their initial state if you're not hovering them anymore

// Answer buttons should be clickable

*/

test.todo('test randomization');
/*
- If the page reload, the question should be different and the answers too
for the entire quiz
*/

test.todo('cheating feature');
/*
The right answer should have a different style than the rest, if cheating mode is on
The right answer should have the same styling as the rest, if cheating mode is off
All the questions should be answered if click on cheating button before they are all answered
Quiz should be back to initial state if click cheating button after they are all answered
*/
test.todo('clicked on an answer');
/*
// Question text should stay the same
// answers should stay the same
// answer button should not be clickable
// next button should be there and be clickable
there should be no animation when hovering answer buttons
there should be an animation when hovering the next button
// progress bar should stay the same
*/
test.todo('clicked on right answer');
/*
- text on the next button should be correct
all the square and the mainsquare from the group changes their appearance (go bigger)
*/
test.todo('clicked on wrong answer');
/*
- text on the next button should be wrong
- Current question should be pushed at the back of the array and be asked again
all the squares and the main squares stay the same
*/
/*
// test.todo('clicked on the next button');

// Question should change
// answers should change
*/
/*
// test.todo('clicked on the next button after clicking on right answer');

// there should be a change in the progress bar
*/
/*
// test.todo('clicked on the next button after clicking on wrong answer');

// there should be no change in the progress bar
*/
test.todo('final state');
/*
- There should be the title that says which quiz it is and how many characters there are
- The progress bar should not be there
The css of the title should be different (centered)
- The question should not be there
- The answers should not be there
- The next button should not be there

All the squares should change their style on hover
All the squares should go back to their initial appearance after the hover ends
- The main squares should all have at least 4 text elements
The main squares should contain the right answers from the quiz

- There should be a title
- There should be a text
- There should be a button to restart the quiz
- There should be a button to go to the next quiz (if it is not the last one)
*/
test.todo('css');
/*
The main squares should always be on top of everything while hovered
The main squares should always be hoverable (nothing in front of it)
Illustration should not go out of screen
Illustrations should not get superposed to other elements
*/
