// SIZES
// general
export const strokeWidth = '2px';
// buttons
export const buttonWidth = 'calc(3.7vw + 64px)';
export const buttonMenuIconSize = `calc(${buttonWidth} / 3)`;
// buttons to answer in the quiz
export const buttonKanjiSize = '72px';
export const buttonKanjiSizeGap = '24px';
// partials
export const contentLWidth = `calc(${buttonKanjiSize} * 3 + ${buttonKanjiSizeGap} * 2)`;
export const contentLMarginL = `calc(3vw + ${buttonWidth})`;
// menu (open)
export const contentMenuWidth = `calc(${contentLMarginL} + ${contentLWidth})`;
// Illus
// export const squareUnitM = '2.2vw';
export const squareUnitM = '1.5vw';
export const squareUnit = '1.1vw';

// MARGINS (some are in sizes because it's used there)
// Illus
export const illuMarginL = `calc(${contentLWidth} + ${contentLMarginL} * 2)`;

// z-index
// parents
export const zImenu = 20;
export const zIBigButton = 10;
export const zIquestion = 2;
export const zIContentL = 2;
export const zIMainSquare = 1;
export const zIIlluWithGrowingSquare = 1;
export const zIIlluBackground = -1;
export const zIAppBackground = -2;

// dependant on their parents
export const zIMainSquareHover = 3;
export const zISquareHover = 2;

// Breakpoints
export const breakPointD = '@media only screen and (min-width: 992px)';

// property group
export const contentL = `
  z-index: ${zIContentL};
  margin: ${buttonWidth};
  position: absolute;
  max-width: 450px;
    ${breakPointD} {
      margin: 0;
      width: ${contentLWidth}; 
      margin-left: ${contentLMarginL};
      top: 50%;
      transform: translateY(-50%);
  }
`;
// for Illustrations
export const illuTouchingGround = `
bottom: ${buttonWidth};
z-index: ${zIIlluWithGrowingSquare};
`;

export const illuDimensions = (height, width) => `
  position: fixed;
  display: grid;
  grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr);
  height: calc(${height} * ${squareUnitM});
  width: calc(${width} * ${squareUnitM});
  ${breakPointD} {
    height: calc(${height} * ${squareUnit});
    width: calc(${width} * ${squareUnit});
  }
  `;

export const illuPosition = (arrCoordinates, touchesGround = false) => {
  const result = {};
  // position order takes the same as the usual order used in CSS
  const arrPositions = ['top', 'right', 'bottom', 'left'];
  for (let i = 0; i < arrCoordinates.length; i += 1) {
    if (arrPositions[i] !== 0) {
      result[arrPositions[i]] = `
      ${arrPositions[i]}: calc(${arrCoordinates[i]} * ${squareUnitM});
      ${breakPointD} {
        ${arrPositions[i]}: calc(${arrCoordinates[i]} * ${squareUnit});
      }
    `;
    }
  }
  if (touchesGround) {
    result.bottom = `
    z-index: ${zIIlluWithGrowingSquare};
    bottom: calc((${arrCoordinates[2]} * ${squareUnitM}) + ${buttonWidth});
    ${breakPointD} {
      bottom: calc((${arrCoordinates[2]} * ${squareUnit}) + ${buttonWidth});
    }
  `;
  }
  return result;
};
