import '@testing-library/jest-dom';

import { renderComponent, setRef } from './_helpers';
import { compareProgressSquare } from './clickNextHelper';

test('Comparison (equal, not equal) before and after clicking on one answer and on the next button', () => {
  let ref;
  ref = renderComponent();
  ref = setRef('click', ref.arrButtonKanji[0]);
  // if there is only one question, it will have a different behavior
  // => if the user answered wrong => it would keep asking the same question
  // if the user answered right => it would not show question and answers anymore
  if (ref.arrProgressSquare.length > 1) {
    const tQuestionS1 = ref.question.textContent;
    const tArrButtonKanjiS1 = ref.arrButtonKanji.map((button) => button.textContent);

    // click on the next button to go to the next question
    ref = setRef('click', ref.buttonNext);

    // The question content should change when the user clicks on the next button
    const tQuestionS2 = ref.question.textContent;
    expect(tQuestionS2).not.toBe(tQuestionS1);
    // The content of the answers should change when the user clicks on the next button
    const tArrButtonKanjiS2 = ref.arrButtonKanji.map((button) => button.textContent);
    expect(tArrButtonKanjiS2).not.toStrictEqual(tArrButtonKanjiS1);
  }
});

test('Comparison (equal, not equal) before and after clicking on the right answer and on the next button', () => {
  const ref = renderComponent();

  const { arrProgressSquareS1, arrProgressSquareS2 } = compareProgressSquare(ref.rightAnswer);

  expect(arrProgressSquareS1).not.toEqual(arrProgressSquareS2);
});

test('Comparison (equal, not equal) before and after clicking on the wrong answer and on the next button', () => {
  const ref = renderComponent();

  const { arrProgressSquareS1, arrProgressSquareS2 } = compareProgressSquare(ref.arrWrongAnswer[0]);

  expect(arrProgressSquareS1).toEqual(arrProgressSquareS2);
});
