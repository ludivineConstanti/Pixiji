const monkeyLeft = [
  [
    // head
    {
      s: 3, column: 3, row: 1, c: '#D0B49E', main: true,
    }, {
      s: 1, column: 2, row: 2, c: '#DFC3AB',
    }, {
      s: 1, column: 6, row: 2, c: '#DFC3AB',
    }, {
      s: 1, column: 1, row: 3, c: '#C08383',
    }, {
      s: 1, column: 2, row: 3, c: '#E1DAD4',
    }, {
      s: 1, column: 6, row: 3, c: '#E1DAD4',
    }, {
      s: 1, column: 7, row: 3, c: '#C08383',
    }, {
      s: 1, column: 1, row: 4, c: '#B16A6A',
    }, {
      s: 1, column: 2, row: 4, c: '#BEADA6',
    }, {
      s: 1, column: 3, row: 4, c: '#4D190F',
    }, {
      s: 1, column: 4, row: 4, c: '#AC3549',
    }, {
      s: 1, column: 5, row: 4, c: '#4D190F',
    }, {
      s: 1, column: 6, row: 4, c: '#BEADA6',
    }, {
      s: 1, column: 7, row: 4, c: '#B16A6A',
    }, {
      s: 1, column: 2, row: 5, c: '#BEADA6',
    }, {
      s: 1, column: 3, row: 5, c: '#CFA7A1',
    }, {
      s: 1, column: 4, row: 5, c: '#BF4152',
    }, {
      s: 1, column: 5, row: 5, c: '#CFA7A1',
    }, {
      s: 1, column: 6, row: 5, c: '#BEADA6',
    }, {
      s: 1, column: 3, row: 6, c: '#BC9E90',
    }, {
      s: 1, column: 4, row: 6, c: '#D8607A',
    }, {
      s: 1, column: 5, row: 6, c: '#BC9E90',
    },
  ],
  // body
  [{
    s: 2, column: 1, row: 7, c: '#C1A285',
  }, {
    s: 3, column: 3, row: 7, c: '#89592C', main: true,
  }, {
    s: 2, column: 6, row: 7, c: '#C1A285',
  }, {
    s: 1, column: 1, row: 9, c: '#E0C3A7',
  }, {
    s: 1, column: 2, row: 9, c: '#D2B08F',
  }, {
    s: 1, column: 6, row: 9, c: '#D2B08F',
  }, {
    s: 1, column: 7, row: 9, c: '#E0C3A7',
  }, {
    s: 1, column: 2, row: 10, c: '#CDA37C',
  }, {
    s: 1, column: 3, row: 10, c: '#CB996B',
  }, {
    s: 1, column: 4, row: 10, c: '#67402C',
  }, {
    s: 1, column: 5, row: 10, c: '#CB996B',
  }, {
    s: 1, column: 6, row: 10, c: '#CDA37C',
  },
  // tail
  {
    s: 1, column: 12, row: 5, c: '#EBCCB0',
  }, {
    s: 1, column: 12, row: 6, c: '#EBCCB0',
  }, {
    s: 1, column: 11, row: 6, c: '#EBCCB0',
  }, {
    s: 1, column: 10, row: 6, c: '#EBCCB0',
  }, {
    s: 1, column: 10, row: 7, c: '#EBCCB0',
  }, {
    s: 1, column: 10, row: 8, c: '#E0C3A7',
  }, {
    s: 1, column: 10, row: 9, c: '#D2B08F',
  }, {
    s: 1, column: 10, row: 10, c: '#C39C78',
  },
  ],
];

const monkeyRight = [
  // head
  [{
    s: 2, column: 2, row: 1, c: '#D0B49E',
  }, {
    s: 1, column: 4, row: 1, c: '#BB9F88',
  }, {
    s: 1, column: 1, row: 2, c: '#BDA089',
  }, {
    s: 1, column: 4, row: 2, c: '#AD5252',
  }, {
    s: 1, column: 5, row: 2, c: '#D0B49E',
  }, {
    s: 1, column: 1, row: 3, c: '#AC3549',
  }, {
    s: 1, column: 2, row: 3, c: '#4D190F',
  }, {
    s: 1, column: 3, row: 3, c: '#BDA089',
  }, {
    s: 1, column: 4, row: 3, c: '#AC3549',
  }, {
    s: 1, column: 5, row: 3, c: '#BDA089',
  }, {
    s: 1, column: 1, row: 4, c: '#BF4152',
  }, {
    s: 1, column: 2, row: 4, c: '#CFA7A1',
  }, {
    s: 2, column: 3, row: 4, c: '#B08069',
  }, {
    s: 1, column: 5, row: 4, c: '#C3966C',
  }, {
    s: 1, column: 1, row: 5, c: '#D8607A',
  }, {
    s: 1, column: 2, row: 5, c: '#BC9E90',
  },
  // body
  {
    s: 2, column: 5, row: 5, c: '#9F7751',
  }, {
    s: 2, column: 3, row: 6, c: '#C3966C',
  }, {
    s: 1, column: 7, row: 6, c: '#855F3D',
  }, {
    s: 3, column: 5, row: 7, c: '#926337', main: true,
  }, {
    s: 2, column: 3, row: 8, c: '#B08069',
  }, {
    s: 1, column: 8, row: 8, c: '#855F3D',
  }, {
    s: 1, column: 1, row: 9, c: '#936147',
  }, {
    s: 1, column: 2, row: 9, c: '#CCA56B',
  }, {
    s: 1, column: 8, row: 9, c: '#795335',
  },
  // tail
  {
    s: 1, column: 9, row: 3, c: '#FFEBD9',
  }, {
    s: 1, column: 10, row: 3, c: '#FCDEC2',
  }, {
    s: 1, column: 11, row: 3, c: '#F9D5B4',
  }, {
    s: 1, column: 11, row: 4, c: '#EBCCB0',
  }, {
    s: 1, column: 11, row: 5, c: '#E0C3A7',
  }, {
    s: 1, column: 11, row: 6, c: '#D2B08F',
  }, {
    s: 1, column: 11, row: 7, c: '#C39C78',
  }, {
    s: 1, column: 11, row: 8, c: '#D2B08F',
  }, {
    s: 1, column: 11, row: 9, c: '#C39C78',
  },
  ],
];

const rocks = [[
  {
    s: 1, column: 1, row: 3, c: '#A4BABF',
  }, {
    s: 1, column: 2, row: 3, c: '#B4C4C8',
  }, {
    s: 1, column: 3, row: 3, c: '#C1CFD2',
  }, {
    s: 1, column: 4, row: 3, c: '#D4DCDE',
  }, {
    s: 4, column: 1, row: 4, c: '#013A3A', main: true,
  },
], [
  {
    s: 1, column: 5, row: 3, c: '#E1E5E6',
  }, {
    s: 1, column: 6, row: 3, c: '#F1F3F3',
  }, {
    s: 1, column: 7, row: 3, c: '#E1E5E6',
  }, {
    s: 1, column: 8, row: 3, c: '#F1F3F3',
  }, {
    s: 4, column: 5, row: 4, c: '#065151', main: true,
  },
], [
  {
    s: 1, column: 9, row: 1, c: '#A4BABF',
  }, {
    s: 1, column: 10, row: 1, c: '#B4C4C8',
  }, {
    s: 1, column: 11, row: 1, c: '#C1CFD2',
  }, {
    s: 1, column: 12, row: 1, c: '#D4DCDE',
  }, {
    s: 1, column: 13, row: 1, c: '#E1E5E6',
  }, {
    s: 1, column: 14, row: 1, c: '#E6F1F1',
  }, {
    s: 6, column: 9, row: 2, c: '#013434', main: true,
  },
], [
  {
    s: 1, column: 15, row: 1, c: '#E1E5E6',
  }, {
    s: 1, column: 16, row: 1, c: '#E6F1F1',
  }, {
    s: 1, column: 17, row: 1, c: '#D4DCDE',
  }, {
    s: 1, column: 18, row: 1, c: '#E6F1F1',
  }, {
    s: 1, column: 19, row: 1, c: '#D4DCDE',
  }, {
    s: 1, column: 20, row: 1, c: '#E6F1F1',
  }, {
    s: 6, column: 15, row: 2, c: '#055757', main: true,
  }, {
    s: 1, column: 21, row: 1, c: '#D4DCDE',
  }, {
    s: 1, column: 22, row: 1, c: '#E6F1F1',
  }, {
    s: 1, column: 23, row: 1, c: '#D4DCDE',
  }, {
    s: 3, column: 21, row: 2, c: '#013434',
  }, {
    s: 3, column: 21, row: 5, c: '#044848',
  },
]];

export const arrSnowMonkeys = [monkeyLeft, monkeyRight, rocks];
export const colorSnowMonkeys = '#004646';
