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

// z-index
export const zIquestion = 2;
export const zImenu = 20;
export const zIMainSquare = 1;

// property group
export const contentL = `
  width: ${contentLWidth}; 
  margin-left: ${contentLMarginL};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
