import '@testing-library/jest-dom';

import { renderComponent, setRef } from './_helpers';

test('Quiz initial state', () => {

  let ref = renderComponent();
  
  // VERIFY THAT THE ELEMENTS ARE THERE
  expect(ref.title).toBeTruthy();
  // Minimum number of questions is 1
  expect(ref.arrProgressSquare.length).toBeGreaterThan(0);
  expect(ref.question).toBeTruthy();
  // It doesn't make sense to have 0 or 1 possible answers to a question
  expect(ref.arrButtonKanji.length).toBeGreaterThan(1);
  expect(ref.arrMainSquare.length).toBeGreaterThan(1);
  // The button to go to the next question should not be there, before the user clicked on an answer
  expect(ref.buttonNext).toBeNull();
  
  // MORE PRECISE TESTS FOR THE ELEMENTS
  // The main squares show the answers of the quiz, once the user answered correctly
  // So there should be as many main square in the illustrations as there is questions in the quiz
  expect(ref.arrProgressSquare.length).toEqual(ref.arrMainSquare.length);
  // the button that let you choose the answers should not be disabled
  ref.arrButtonKanji.forEach(button => expect(button).not.toBeDisabled());

  // TEST HOW IT LOOKS
  // We are at the beginning of the quiz, so the first square of the progress bar should look different from the others
  expect(Object.is(
    JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[0])), 
    JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[1]))))
    .not.toBe(true);
    // The rest of the squares should be identical
  for(let i = 1 ; i < ref.arrProgressSquare.length - 1; i += 1) {
    expect(Object.is(
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i])), 
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i + 1]))))
      .toBe(true);
  }
});
