import { setRef } from './_helpers';

// eslint-disable-next-line import/prefer-default-export
export const compareProgressSquare = (buttonAnswer) => {
  let ref = setRef('click', buttonAnswer);

  const arrProgressSquareS1 = ref.arrProgressSquare.map((square) => (
    JSON.stringify(window.getComputedStyle(square))
  ));

  ref = setRef('click', ref.buttonNext);

  const arrProgressSquareS2 = ref.arrProgressSquare.map((square) => (
    JSON.stringify(window.getComputedStyle(square))
  ));

  return { arrProgressSquareS1, arrProgressSquareS2 };
};
