import '@testing-library/jest-dom';

import { renderComponent, setRef } from './_helpers';

test('Quiz state after clicking on one answer', () => {
  let ref = renderComponent();

  // Click on an answer
  ref = setRef('click', ref.arrButtonKanji[0]);

  // The button to go to the next question should now be displayed
  expect(ref.buttonNext).toBeTruthy();
  expect(ref.buttonNext).not.toBeDisabled();

  // Now that we answered the question, the answer buttons should not be clickable anymore
  ref.arrButtonKanji.forEach((button) => expect(button).toBeDisabled());
});

test('Comparison (equal, not equal) before and after clicking on one answer', () => {
  let ref = renderComponent();

  const tQuestionS1 = ref.question.textContent;
  const tArrButtonKanjiS1 = ref.arrButtonKanji.map((button) => button.textContent);
  const arrProgressSquareS1 = ref.arrProgressSquare.map((square) => (
    JSON.stringify(window.getComputedStyle(square))
  ));

  ref = setRef('click', ref.arrButtonKanji[0]);

  // The question should not change when the user clicks on an answer
  const tQuestionS2 = ref.question.textContent;
  expect(tQuestionS1).toBe(tQuestionS2);
  // The answers should not change when the user clicks on an answer
  const tArrButtonKanjiS2 = ref.arrButtonKanji.map((button) => button.textContent);
  expect(tArrButtonKanjiS1).toStrictEqual(tArrButtonKanjiS2);
  // The progress bar should not change before going to the next question
  const arrProgressSquareS2 = ref.arrProgressSquare.map((square) => (
    JSON.stringify(window.getComputedStyle(square))
  ));
  expect(arrProgressSquareS1).toStrictEqual(arrProgressSquareS2);
});

// window.getComputedStyle()
