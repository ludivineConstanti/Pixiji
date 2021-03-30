import { gsap, TweenMax } from 'gsap';

import distributeByPosition from 'src/helpers/gsap/distributedByPosition';

function squaresShrink(selector) {
  const tl = gsap.timeline();
  // this just helps avoid the pixel-snapping that some browsers do.
  TweenMax.set(selector, { rotation: 0.5, force3D: true });

  // one stagger call does all the animation:
  tl.to(selector, {
    duration: 0.75,
    scale: 0.1,
    ease: 'power1.in',
    // function helper because our array of div is not properly configurated
    // for greensocks to be able to know where the center is, otherwise
    stagger: distributeByPosition({
      // amout of time split up among all the staggers
      // negative value inverses the center of the animation
      amount: -0.75,
      // position from which the stagger will emanate
      from: 'center', // can also do from an index
    }),
  });
}

function squaresGrow(selector) {
  const tl = gsap.timeline();
  // this just helps avoid the pixel-snapping that some browsers do.
  TweenMax.set(selector, { rotation: 0.5, force3D: true });

  // one stagger call does all the animation:
  tl.to(selector, {
    duration: 0.5,
    scale: 1.25,
    ease: 'power1.out',
    // function helper because our array of div is not properly configurated
    // for greensocks to be able to know where the center is, otherwise
    stagger: distributeByPosition({
      // amout of time split up among all the staggers
      // negative value inverses the center of the animation
      amount: 0.5,
      // position from which the stagger will emanate
      from: 'center', // can also do from an index
    }),
    // need to clear props to avoid the gap side effect that appears
    // when the div's position is controlled by JavaScript
  }).to(selector, {
    duration: 0.25,
    scale: 1,
    ease: 'power1.inOut',
    // function helper because our array of div is not properly configurated
    // for greensocks to be able to know where the center is, otherwise
    stagger: distributeByPosition({
      // amout of time split up among all the staggers
      // negative value inverses the center of the animation
      amount: 0.25,
      // position from which the stagger will emanate
      from: 'center', // can also do from an index
    }),
    // need to clear props to avoid the gap side effect that appears
    // when the div's position is controlled by JavaScript
  }).set(selector, { clearProps: 'x, y, scale' });
}

export { squaresShrink, squaresGrow };
