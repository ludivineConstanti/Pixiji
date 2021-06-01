import '@testing-library/jest-dom';

import { tQuiz } from 'src/assets/querySelectors';
import { renderComponent, quiz, quizKanjis } from './_helpers';

test('Quiz initial state', () => {
  const ref = renderComponent();

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
  const title = `${tQuiz.title} ${quiz.id} - ${quiz.title} (${quizKanjis.length} kanjis)`;
  expect(ref.title.textContent).toEqual(title);
  // The main squares show the answers of the quiz, once the user answered correctly
  // So there should be as many main square in the illustrations as there is questions in the quiz
  expect(ref.arrProgressSquare.length).toEqual(ref.arrMainSquare.length);
  // the button that let you choose the answers should not be disabled
  ref.arrButtonKanji.forEach((button) => expect(button).not.toBeDisabled());

  // TEST HOW IT LOOKS
  // We are at the beginning of the quiz
  // so the first square of the progress bar should look different from the others
  expect(JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[0]))).not.toEqual(
    JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[1])),
  );
  // The rest of the squares should be identical
  for (let i = 1; i < ref.arrProgressSquare.length - 1; i += 1) {
    expect(
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i])),
    ).toEqual(JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i + 1])));
  }
});
