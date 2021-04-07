// SIZES
// general
export const strokeWidth = '2px';
// buttons
export const buttonWidth = 'calc(4vw + 56px)';
export const buttonMenuIconSize = 'calc(1vw + 24px)';
// buttons to answer in the quiz
export const buttonKanjiSize = '72px';
export const buttonKanjiSizeGap = '24px';
// partials
export const contentLWidth = `calc(${buttonKanjiSize} * 3 + ${buttonKanjiSizeGap} * 2)`;
export const contentLMarginL = `calc(80px + ${buttonWidth})`;
// menu (open)
export const contentMenuWidth = `calc(${contentLMarginL} + ${contentLWidth})`;
// Illus
// also is in the scss file in the illu folder
export const squareUnit = '1.1vw';

// MARGINS (some are in sizes because it's used there)
// Illus
export const illuMarginL = `calc(${contentLWidth} + ${contentLMarginL} * 2)`;

// z-index
// parents
export const zImenu = 20;
export const zIBigButton = 10;
export const zIquestion = 2;
export const zIMainSquare = 1;
export const zIIlluWithGrowingSquare = 1;

// dependant on their parents
export const zIMainSquareHover = 2;
export const zISquareHover = 1;

// property group
export const contentL = `
  width: ${contentLWidth}; 
  margin-left: ${contentLMarginL};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
// for Illustrations
export const groundDeco = `
position: fixed;
left: 0;
bottom: 0;
height: ${buttonWidth};
width: 100vw;
`;

export const illuTouchingGround = `
position: fixed;
bottom: ${buttonWidth};
z-index: ${zIIlluWithGrowingSquare};
`;
