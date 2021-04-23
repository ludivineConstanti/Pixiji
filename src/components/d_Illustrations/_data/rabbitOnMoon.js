// import mapIllu from 'src/components/d_Illustrations/_helpers/mapIllu';

const planet = [
  [{
    s: 1, column: 4, row: 1, c: '#B6E7FF',
  }, {
    s: 2, column: 5, row: 1, c: '#83D0F6',
  }, {
    s: 3, column: 2, row: 2, c: '#6DC7F4', main: true,
  }, {
    s: 1, column: 1, row: 4, c: '#60ACD2',
  }, {
    s: 2, column: 1, row: 5, c: '#5897B7',
  }],
  [{
    s: 1, column: 7, row: 1, c: '#B6E7FF',
  }, {
    s: 2, column: 5, row: 3, c: '#5AB2DE',
  }, {
    s: 3, column: 7, row: 2, c: '#58BDF0', main: true,
  }, {
    s: 1, column: 10, row: 4, c: '#6CC9F8',
  }, {
    s: 2, column: 9, row: 5, c: '#4788A8',
  }],
  [{
    s: 1, column: 1, row: 7, c: '#35637A',
  }, {
    s: 2, column: 3, row: 5, c: '#3D7E9E',
  }, {
    s: 3, column: 2, row: 7, c: '#1D4154', main: true,
  }, {
    s: 1, column: 4, row: 10, c: '#284A67',
  }, {
    s: 2, column: 5, row: 9, c: '#203E4E',
  }],
  [{
    s: 1, column: 7, row: 10, c: '#284A67',
  }, {
    s: 2, column: 5, row: 7, c: '#284F64',
  }, {
    s: 3, column: 7, row: 7, c: '#1D4154', main: 'bottom',
  }, {
    s: 1, column: 10, row: 7, c: '#35637A',
  }, {
    s: 2, column: 7, row: 5, c: '#40728B',
  }, {
    s: 2, column: 5, row: 5, c: '#48819D',
  }],
];

const white = '#FFFFFF';
const lightGrey = '#DFDFDF';
const orangeL1 = '#F8AB82';
const orange = '#F48A51';
const orangeD1 = '#E0743A';
const orangeD2 = '#D9672A';

const rabbit = [
  [{ // head
    s: 1, column: 5, row: 1, c: 'rgba(255, 255, 255, 0.25)',
  }, {
    s: 1, column: 6, row: 1, c: lightGrey,
  }, {
    s: 1, column: 7, row: 1, c: 'rgba(255, 255, 255, 0.25)',
  }, {
    s: 1, column: 8, row: 1, c: white,
  }, {
    s: 1, column: 4, row: 2, c: 'rgba(255, 255, 255, 0.1)',
  }, {
    s: 1, column: 5, row: 2, c: 'rgba(255, 255, 255, 0.2)',
  }, {
    s: 1, column: 6, row: 2, c: lightGrey,
  }, {
    s: 1, column: 7, row: 2, c: lightGrey,
  }, {
    s: 1, column: 8, row: 2, c: lightGrey,
  }, {
    s: 2, column: 8, row: 2, c: white,
  }, {
    s: 2, column: 3, row: 3, c: 'rgba(255, 255, 255, 0.2)',
  }, {
    s: 2, column: 5, row: 3, c: 'rgba(255, 255, 255, 0.15)',
  }, {
    s: 1, column: 7, row: 3, c: lightGrey,
  }, {
    s: 1, column: 10, row: 3, c: 'rgba(255, 255, 255, 0.1)',
  }, {
    s: 1, column: 7, row: 4, c: lightGrey,
  }, {
    s: 1, column: 8, row: 4, c: white,
  }, {
    s: 2, column: 9, row: 4, c: 'rgba(255, 255, 255, 0.2)',
  }, {
    s: 2, column: 3, row: 5, c: 'rgba(255, 255, 255, 0.15)',
  }, {
    s: 1, column: 5, row: 5, c: 'rgba(255, 255, 255, 0.1)',
  }, {
    s: 1, column: 6, row: 5, c: white,
  }, {
    s: 1, column: 7, row: 5, c: white,
  }, {
    s: 1, column: 8, row: 5, c: white,
  }, {
    s: 1, column: 5, row: 6, c: white,
  }, {
    s: 1, column: 6, row: 6, c: white,
  }, {
    s: 1, column: 7, row: 6, c: '#120637',
  }, {
    s: 1, column: 8, row: 6, c: white,
  }, {
    s: 1, column: 9, row: 6, c: 'rgba(255, 255, 255, 0.01)',
  }, {
    s: 1, column: 10, row: 6, c: 'rgba(255, 255, 255, 0.075)',
  }, {
    s: 1, column: 4, row: 7, c: 'rgba(255, 255, 255, 0.05)',
  }, {
    s: 1, column: 5, row: 7, c: white,
  }, {
    s: 1, column: 6, row: 7, c: white,
  }, {
    s: 1, column: 7, row: 7, c: white,
  }, {
    s: 1, column: 8, row: 7, c: white,
  }, {
    s: 1, column: 9, row: 7, c: 'rgba(255, 255, 255, 0.05)',
  }, {
    s: 1, column: 4, row: 8, c: orangeL1,
  }, {
    s: 2, column: 5, row: 8, c: orange,
  }, {
    s: 1, column: 7, row: 8, c: orange,
  }, {
    s: 2, column: 8, row: 8, c: orangeD2,
  }, {
    s: 1, column: 4, row: 9, c: orange,
  }, {
    s: 1, column: 7, row: 9, c: orangeD2,
  }, {
    s: 1, column: 5, row: 10, c: orangeL1,
  }, {
    s: 1, column: 6, row: 10, c: orangeL1,
  }, {
    s: 2, column: 7, row: 10, c: orangeD1,
  }, {
    s: 1, column: 4, row: 11, c: orangeL1,
  }, {
    s: 2, column: 5, row: 11, c: orange,
  }, {
    s: 2, column: 1, row: 12, c: orange,
  }, {
    s: 1, column: 4, row: 12, c: orangeL1,
  }, {
    s: 1, column: 7, row: 12, c: orangeL1,
  }, {
    s: 1, column: 8, row: 12, c: orange,
  }, {
    s: 1, column: 9, row: 12, c: orangeD1,
  }, {
    s: 1, column: 11, row: 12, c: white,
  }, {
    s: 1, column: 3, row: 13, c: orangeL1,
  }, {
    s: 3, column: 4, row: 13, c: orangeD1, main: true,
  }, {
    s: 1, column: 7, row: 13, c: white,
  }, {
    s: 1, column: 8, row: 13, c: white,
  }, {
    s: 1, column: 9, row: 13, c: orangeD1,
  }, {
    s: 1, column: 10, row: 13, c: white,
  }, {
    s: 1, column: 11, row: 13, c: white,
  }, {
    s: 2, column: 1, row: 14, c: orangeD1,
  }, {
    s: 1, column: 3, row: 14, c: orange,
  }, {
    s: 2, column: 7, row: 14, c: orangeD2,
  }, {
    s: 1, column: 9, row: 14, c: orangeD2,
  }, {
    s: 1, column: 10, row: 14, c: white,
  }, {
    s: 1, column: 3, row: 15, c: orangeD1,
  },
  ],
];

const yellowL1 = '#FFCC68';
const yellow = '#FFBA31';
const yellowD1 = '#FFA931';
const yellowD2 = '#FF9B31';
const yellowD3 = '#F59523';
const yellowD4 = '#EA840B';

const moon = [
  [{
    s: 2, column: 11, row: 1, c: yellow,
  },
  {
    s: 4, column: 13, row: 1, c: yellow, main: true,
  },
  {
    s: 2, column: 17, row: 1, c: yellow,
  },
  {
    s: 2, column: 9, row: 1, c: yellowL1,
  }, {
    s: 2, column: 19, row: 1, c: yellowL1,
  },
  ],
  [{
    s: 4, column: 5, row: 3, c: yellow, main: true,
  }, {
    s: 2, column: 5, row: 7, c: yellow,
  },
  {
    s: 2, column: 3, row: 5, c: yellowL1,
  },
  ], [{
    s: 4, column: 9, row: 3, c: yellowD1, main: true,
  },
  {
    s: 2, column: 13, row: 5, c: yellowD1,
  }, {
    s: 2, column: 11, row: 7, c: yellowD1,
  },
  ], [{
    s: 2, column: 15, row: 5, c: yellowD2,
  }, {
    s: 4, column: 17, row: 3, c: yellowD2, main: true,
  }, {
    s: 2, column: 17, row: 7, c: yellowD2,
  },
  ], [
    {
      s: 4, column: 21, row: 3, c: yellowD1, main: true,
    }, {
      s: 2, column: 25, row: 5, c: yellowL1,
    }, {
      s: 2, column: 23, row: 7, c: yellowD1,
    },
  ], [{
    s: 2, column: 3, row: 7, c: yellowD3,
  }, {
    s: 6, column: 1, row: 9, c: yellowD3, main: true, position: 'bottom',
  },
  ], [{
    s: 4, column: 7, row: 7, c: yellowD2, main: true,
  },
  ], [{
    s: 4, column: 7, row: 11, c: yellow, main: true, position: 'bottom',
  }, {
    s: 2, column: 11, row: 13, c: yellow,
  },
  ], [
    {
      s: 2, column: 11, row: 9, c: yellow,
    },
    {
      s: 4, column: 13, row: 7, c: yellow, main: true,
    },
    {
      s: 2, column: 17, row: 9, c: yellow,
    },
  ], [{
    s: 2, column: 11, row: 11, c: yellowD3,
  }, {
    s: 4, column: 13, row: 11, c: yellowD3, main: true, position: 'bottom',
  }, {
    s: 2, column: 17, row: 11, c: yellowD3,
  },
  ], [{
    s: 4, column: 19, row: 7, c: yellowD3, main: true,
  },
  ], [{
    s: 2, column: 17, row: 13, c: yellowD1,
  }, {
    s: 4, column: 19, row: 11, c: yellowD1, main: true, position: 'bottom',
  },
  ], [{
    s: 2, column: 25, row: 7, c: yellowD4,
  }, {
    s: 6, column: 23, row: 9, c: yellowD4, main: true, position: 'bottom',
  },
  ],
];

// moon = mapIllu(moon, { name: 'shine', values: [3, 6] });

export const arrRabbitOnMoon = [planet, rabbit, moon];
export const colorRabbitOnMoon = '#0A2846';
