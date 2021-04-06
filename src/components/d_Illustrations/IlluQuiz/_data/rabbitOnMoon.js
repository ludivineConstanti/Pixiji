const white = '#FFFFFF';
const lightGrey = '#DFDFDF';

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
    s: 3, column: 7, row: 7, c: '#1D4154', main: true,
  }, {
    s: 1, column: 10, row: 7, c: '#35637A',
  }, {
    s: 2, column: 7, row: 5, c: '#40728B',
  }, {
    s: 2, column: 5, row: 5, c: '#48819D',
  }],
];

const rabbit = [
  [{
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
    s: 1, column: 4, row: 8, c: '#FEA271',
  }, {
    s: 2, column: 5, row: 8, c: '#F39D6F',
  }, {
    s: 1, column: 7, row: 8, c: '#E39972',
  }, {
    s: 2, column: 8, row: 8, c: '#E79164',
  }, {
    s: 1, column: 4, row: 9, c: '#FEA271',
  }, {
    s: 1, column: 7, row: 9, c: '#C28B6D',
  }, {
    s: 1, column: 5, row: 10, c: '#E59469',
  }, {
    s: 1, column: 6, row: 10, c: '#E59469',
  }, {
    s: 2, column: 7, row: 10, c: '#AF7C60',
  }, {
    s: 1, column: 4, row: 11, c: '#E59469',
  }, {
    s: 2, column: 5, row: 11, c: '#DE7C48',
  }, {
    s: 2, column: 1, row: 12, c: '#E59469',
  }, {
    s: 1, column: 4, row: 12, c: '#E59469',
  }, {
    s: 1, column: 7, row: 12, c: '#FEA271',
  }, {
    s: 1, column: 8, row: 12, c: '#DE8E63',
  }, {
    s: 1, column: 9, row: 12, c: '#CE7749',
  }, {
    s: 1, column: 11, row: 12, c: white,
  }, {
    s: 1, column: 3, row: 13, c: '#FEA271',
  }, {
    s: 3, column: 4, row: 13, c: '#D17543', main: true,
  }, {
    s: 1, column: 7, row: 13, c: white,
  }, {
    s: 1, column: 8, row: 13, c: white,
  }, {
    s: 1, column: 9, row: 13, c: '#DE7943',
  }, {
    s: 1, column: 10, row: 13, c: white,
  }, {
    s: 1, column: 11, row: 13, c: white,
  }, {
    s: 2, column: 1, row: 14, c: '#E88550',
  }, {
    s: 1, column: 3, row: 14, c: '#FF955C',
  }, {
    s: 2, column: 7, row: 14, c: '#DE7944',
  }, {
    s: 1, column: 9, row: 14, c: '#CE7749',
  }, {
    s: 1, column: 10, row: 14, c: white,
  }, {
    s: 1, column: 3, row: 15, c: '#FF8F54',
  },
  ],
];

const moon = [
  [{
    s: 2, column: 11, row: 1, c: '#FED480',
  },
  {
    s: 4, column: 13, row: 1, c: '#FEC475', main: true,
  },
  {
    s: 2, column: 17, row: 1, c: '#FFBF68',
  },
  ],
  [{
    s: 2, column: 9, row: 1, c: '#FAE0AB',
  },
  {
    s: 4, column: 5, row: 3, c: '#FECF7F', main: true,
  },
  {
    s: 2, column: 3, row: 5, c: '#FBDCA2',
  },
  ], [{
    s: 4, column: 9, row: 3, c: '#FFB361', main: true,
  },
  {
    s: 2, column: 13, row: 5, c: '#F9AB50',
  },
  {
    s: 2, column: 13, row: 7, c: '#E48259',
  },
  ], [{
    s: 2, column: 15, row: 5, c: '#EF9D3C',
  }, {
    s: 2, column: 15, row: 7, c: '#E28865',
  }, {
    s: 4, column: 17, row: 3, c: '#F9AB50', main: true,
  },
  ], [{
    s: 2, column: 19, row: 1, c: '#FFB44F',
  },
  {
    s: 4, column: 21, row: 3, c: '#EF9D3C', main: true,
  }, {
    s: 2, column: 25, row: 5, c: '#E99633',
  },
  ], [{
    s: 2, column: 3, row: 7, c: '#FBA06D',
  }, {
    s: 6, column: 1, row: 9, c: '#DE7D56', main: true, bottom: true,
  },
  ], [{
    s: 2, column: 5, row: 7, c: '#F0976D',
  }, {
    s: 4, column: 7, row: 7, c: '#E28865', main: true,
  }, {
    s: 2, column: 11, row: 7, c: '#F5986D',
  },
  ], [{
    s: 4, column: 7, row: 11, c: '#D2724C', main: true, bottom: true,
  }, {
    s: 2, column: 11, row: 9, c: '#E57C55',
  }, {
    s: 2, column: 11, row: 13, c: '#C2643F',
  },
  ], [{
    s: 2, column: 11, row: 11, c: '#D06A42',
  }, {
    s: 2, column: 13, row: 9, c: '#C86540',
  }, {
    s: 2, column: 15, row: 9, c: '#E27750',
  }, {
    s: 4, column: 13, row: 11, c: '#D46E44', main: true, bottom: true,
  }, {
    s: 2, column: 17, row: 11, c: '#CF6741',
  },
  ], [{
    s: 2, column: 17, row: 7, c: '#F5986D',
  }, {
    s: 4, column: 19, row: 7, c: '#F68F67', main: true,
  }, {
    s: 2, column: 23, row: 7, c: '#E17C53',
  },
  ], [{
    s: 2, column: 17, row: 9, c: '#D37754',
  }, {
    s: 2, column: 17, row: 13, c: '#C2633F',
  }, {
    s: 4, column: 19, row: 11, c: '#E87343', main: true, bottom: true,
  },
  ], [{
    s: 2, column: 25, row: 7, c: '#DC7245',
  }, {
    s: 6, column: 23, row: 9, c: '#D46E44', main: true, bottom: true,
  },
  ],
];

export const arrRabbitOnMoon = [planet, rabbit, moon];
export const colorRabbitOnMoon = '#0A2846';
