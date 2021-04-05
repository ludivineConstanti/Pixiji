import styled from 'styled-components';

import { zIMainSquare } from 'src/styles/g';

// initial css before comes in
export default styled.div`
  z-index: ${zIMainSquare};
`;

export const tHover = (tl, ref, infosRef, colorHsl, duration, bottom) => {
  // takes the width of the div, in px, and converts it in vw
  const cWidth = ref.clientWidth / document.documentElement.clientWidth * 100;
  const cNewSize = 8.8;
  const cOffset = (cWidth - cNewSize) / 2;
  tl.timeScale(0.7).to(ref, duration, {
    // needs to have a higher z-index than the rest (current highest is 2)
    ease: 'power1.inOut',
    zIndex: 10,
    y: `${bottom ? (cOffset * 2).toFixed(0) : (cOffset).toFixed(0)}vw`,
    x: `${(cOffset).toFixed(0)}vw`,
    height: `${cNewSize}vw`,
    width: `${cNewSize}vw`,
    fontSize: '24px',
    backgroundColor: `hsl(${colorHsl[0]}, ${colorHsl[1] > 75 ? 75 : colorHsl[1]}%, ${colorHsl[2] > 50 ? 50 : colorHsl[2]}%)`,
  }).to(infosRef, duration - 0.1, {
    ease: 'power1.inOut', display: 'block', opacity: 1, margin: '8px 0 8px 0',
    // the animation of the second group needs a slight delay
    // otherwise the text in the middle jumps
    // need to try to keep the delay at a minimum
    // otherwise animation looks laggy (especially when exit)
  }, duration / 2.5);
  return tl;
};
