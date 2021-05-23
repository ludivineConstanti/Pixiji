const iVIconTB = {
  initial: { width: 0 },
  animate: { width: '100%', alignSelf: 'flex-end' },
};

// initial

export const iVIconT = {
  initial: iVIconTB.initial,
  animate: iVIconTB.animate,
};

export const iVIconM = {
  initial: { width: 0 },
  animate: { width: '75%' },
};

export const iVIconB = {
  initial: iVIconTB.initial,
  animate: iVIconTB.animate,
};

// animate

export const aVIconT = {
  menuCloses: iVIconT.animate,
  menuOpens: {
    transformOrigin: '100% 0%',
    width: '142%',
    alignSelf: 'flex-end',
    rotate: -45,
  },
};

export const aVIconM = {
  menuCloses: { width: '75%' },
  menuOpens: iVIconM.initial,
};

export const aVIconB = {
  menuCloses: iVIconB.animate,
  menuOpens: {
    transformOrigin: '100% 100%',
    width: '142%',
    alignSelf: 'flex-end',
    rotate: 45,
  },
};
