import '@testing-library/jest-dom';

import { renderComponent, setRef } from './_helpers';

test('Click right answers', () => {
  let ref = renderComponent();
  console.log(window.getComputedStyle(ref.arrMainSquare[0]));
  ref = setRef('click', ref.rightAnswer);
  ref = setRef('hover', ref.arrMainSquare[0]);
  console.log(window.getComputedStyle(ref.arrMainSquare[0]));
})
