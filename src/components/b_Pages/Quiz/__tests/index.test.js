import '@testing-library/jest-dom';

import { renderComponent, setRef } from './helpers';

test('Quiz state after clicking on one answer', () => {

  let ref = renderComponent();

  // Click on an answer
  ref = setRef('click', ref.arrButtonKanji[0]);

  // The button to go to the next question should now be displayed
  expect(ref.buttonNext).toBeTruthy();

  // Now that we answered the question, the answer buttons should not be clickable anymore
  ref.arrButtonKanji.forEach(button => expect(button).toBeDisabled());

})

test('Comparison (equal, not equal) before and after clicking on one answer and on the next button', () => {

  let ref = renderComponent();

  const tQuestionS1 = ref.question.textContent;
  const tArrButtonKanjiS1 = ref.arrButtonKanji.map(button => button.textContent);

  ref = setRef('click', ref.arrButtonKanji[0]);

  // The question should not change when the user clicks on an answer
  const tQuestionS2 = ref.question.textContent;
  expect(tQuestionS2).toBe(tQuestionS1);
  // The answers should not change when the user clicks on an answer
  const tArrButtonKanjiS2 = ref.arrButtonKanji.map(button => button.textContent);
  expect(tArrButtonKanjiS2).toStrictEqual(tArrButtonKanjiS1);

  // if there is only one question, it will have a different behavior
  // => if the user answered wrong => it would keep asking the same question
  // if the user answered right => it would not show question and answers anymore
  if(ref.arrProgressSquare.length > 1) {
  // click on the next button to go to the next question
  ref = setRef('click', ref.buttonNext);

  // The question content should change when the user clicks on the next button
  const tQuestionS3 = ref.question.textContent;
  expect(tQuestionS3).not.toBe(tQuestionS2);
  // The content of the answers should change when the user clicks on the next button
  const tArrButtonKanjiS3 = ref.arrButtonKanji.map(button => button.textContent);
  expect(tArrButtonKanjiS3).not.toStrictEqual(tArrButtonKanjiS2);
}
});

// window.getComputedStyle()
