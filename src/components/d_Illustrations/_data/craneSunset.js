const black = '#000000';
const white = '#FFFFFF';

const sun = [[{
  // top
  s: 1, column: 2, row: 1, c: '#AF0700',
}, {
  s: 1, column: 3, row: 1, c: '#C6140D',
}, {
  s: 1, column: 4, row: 1, c: '#D5221B',
}, // middle
{
  s: 3, column: 2, row: 2, c: '#B40C05', main: true,
}, // left
{
  s: 1, column: 1, row: 2, c: '#D5221B',
}, {
  s: 1, column: 1, row: 3, c: '#C6140D',
}, {
  s: 1, column: 1, row: 4, c: '#AF0700',
}, // right
{
  s: 1, column: 5, row: 2, c: '#D5221B',
}, {
  s: 1, column: 5, row: 3, c: '#C6140D',
}, {
  s: 1, column: 5, row: 4, c: '#AF0700',
}, // bottom
{
  s: 1, column: 2, row: 5, c: '#AF0700',
}, {
  s: 1, column: 3, row: 5, c: '#C6140D',
}, {
  s: 1, column: 4, row: 5, c: '#D5221B',
},
]];

const cloudLeft = [
  // left part
  [{
    s: 1, column: 1, row: 3, c: '#E6F1F1',
  }, {
    s: 1, column: 2, row: 3, c: '#DBE6EA',
  }, {
    s: 2, column: 3, row: 2, c: '#CCDCE0',
  }, {
    s: 2, column: 5, row: 2, c: '#BDCDD1',
  }, {
    s: 3, column: 7, row: 1, c: '#AAC8CF', main: true,
  }], // right part
  [
    {
      s: 3, column: 10, row: 1, c: '#8AB3BE', main: true,
    }, {
      s: 2, column: 13, row: 2, c: '#BDCDD1',
    }, {
      s: 1, column: 15, row: 3, c: '#DBE6EA',
    }, {
      s: 1, column: 16, row: 3, c: '#E0F1F1',
    },
  ],
];

const cloudRight = [
  [{ // left part
    s: 1, column: 1, row: 3, c: '#E6F1F1',
  }, {
    s: 1, column: 2, row: 3, c: '#DBE6EA',
  }, {
    s: 1, column: 3, row: 3, c: '#CCDCE0',
  }, {
    s: 2, column: 4, row: 2, c: '#DBE6EA',
  }, {
    s: 3, column: 6, row: 1, c: '#CCDCE0', main: true,
  }], [ // right part
    {
      s: 3, column: 9, row: 1, c: '#A9C8CF', main: true,
    }, {
      s: 1, column: 12, row: 3, c: '#CCDCE0',
    }, {
      s: 1, column: 13, row: 3, c: '#DBE6EA',
    },
  ],
];

const rockLeft = [
  [{
    s: 1, column: 1, row: 3, c: '#A4B5BD',
  }, {
    s: 3, column: 2, row: 1, c: '#C5CDD0', main: true,
  }, {
    s: 2, column: 5, row: 2, c: '#A4B5BD',
  }],
];

const baby = [[
  {
    s: 1, column: 4, row: 7, c: black,
  }, {
    s: 2, column: 5, row: 7, c: '#AAC8CF',
  }, {
    s: 1, column: 3, row: 8, c: black,
  }, {
    s: 1, column: 4, row: 8, c: black,
  }, {
    s: 1, column: 1, row: 9, c: black,
  }, {
    s: 1, column: 2, row: 9, c: black,
  }, {
    s: 3, column: 3, row: 9, c: '#97BDCC', main: true,
  }, {
    s: 1, column: 2, row: 10, c: black,
  }, {
    s: 1, column: 5, row: 12, c: '#8EA0A4',
  },
], [
  // beak
  {
    s: 1, column: 9, row: 1, c: '#51473E',
  }, {
    s: 1, column: 8, row: 2, c: '#51473E',
  }, // head
  {
    s: 1, column: 6, row: 2, c: '#B40C05',
  }, {
    s: 1, column: 7, row: 2, c: black,
  }, {
    s: 1, column: 6, row: 3, c: '#F4F8FC',
  }, {
    s: 1, column: 7, row: 3, c: black,
  }, // neck
  {
    s: 1, column: 6, row: 4, c: '#E7E7E7',
  }, {
    s: 2, column: 7, row: 4, c: black,
  }, {
    s: 1, column: 6, row: 5, c: '#C5D2DA',
  }, {
    s: 1, column: 9, row: 5, c: black,
  }, {
    s: 1, column: 8, row: 6, c: black,
  }, {
    s: 1, column: 9, row: 6, c: '#C8D3D9',
  }, {
    s: 1, column: 9, row: 7, c: '#9DB8C6',
  }, // body
  {
    s: 2, column: 7, row: 7, c: '#D9E3E3',
  }, {
    s: 3, column: 6, row: 9, c: '#B8D0DC', main: true,
  }, // left leg
  {
    s: 1, column: 4, row: 12, c: black,
  }, {
    s: 1, column: 4, row: 13, c: black,
  }, {
    s: 1, column: 4, row: 14, c: black,
  }, {
    s: 1, column: 4, row: 15, c: black,
  }, {
    s: 1, column: 4, row: 16, c: black,
  }, // right leg
  {
    s: 1, column: 6, row: 12, c: black,
  }, {
    s: 1, column: 6, row: 13, c: black,
  }, {
    s: 1, column: 6, row: 14, c: black,
  }, {
    s: 1, column: 6, row: 15, c: black,
  }, {
    s: 1, column: 6, row: 16, c: black,
  }, {
    s: 1, column: 7, row: 12, c: '#8EA0A4',
  },
]];

const adult = [
  [ // beak
    {
      s: 1, column: 1, row: 1, c: '#655C51',
    }, {
      s: 1, column: 1, row: 2, c: '#534841',
    }, {
      s: 1, column: 2, row: 2, c: '#655C51',
    }, {
      s: 1, column: 2, row: 3, c: '#534841',
    }, {
      s: 1, column: 3, row: 3, c: '#534841',
    }, {
      s: 1, column: 2, row: 4, c: '#534841',
    }, // head
    {
      s: 1, column: 3, row: 4, c: black,
    }, {
      s: 1, column: 4, row: 4, c: '#B40C05',
    }, {
      s: 1, column: 3, row: 5, c: black,
    }, {
      s: 1, column: 4, row: 5, c: '#F4F8FC',
    }, // neck
    {
      s: 2, column: 2, row: 6, c: black,
    }, {
      s: 1, column: 4, row: 6, c: '#E7E7E7',
    }, {
      s: 1, column: 4, row: 7, c: '#C5D2DA',
    }, {
      s: 1, column: 1, row: 7, c: black,
    }, {
      s: 1, column: 1, row: 8, c: '#A4B3BA',
    }, {
      s: 1, column: 2, row: 8, c: black,
    }, {
      s: 1, column: 1, row: 9, c: '#B4C1C8',
    }, {
      s: 2, column: 2, row: 9, c: '#F8F9F9',
    }, {
      s: 1, column: 4, row: 10, c: '#E7E7E7',
    }, {
      s: 1, column: 5, row: 10, c: '#F4F5F7',
    }, {
      s: 1, column: 2, row: 11, c: '#8BA5AF',
    }, {
      s: 2, column: 3, row: 11, c: '#A4B5BD',
    }, {
      s: 1, column: 5, row: 11, c: '#E7E7E7',
    }, {
      s: 3, column: 5, row: 12, c: '#B6D0DC', main: true,
    }, {
      s: 1, column: 4, row: 13, c: '#8BA5AF',
    },
  ], [ // middle
    {
      s: 2, column: 6, row: 7, c: '#ECF0F1',
    }, {
      s: 1, column: 8, row: 7, c: '#859092',
    }, {
      s: 1, column: 8, row: 8, c: '#708995',
    }, {
      s: 2, column: 9, row: 7, c: '#7992A0',
    }, {
      s: 3, column: 6, row: 9, c: '#9EC4D6', main: true,
    }, {
      s: 2, column: 9, row: 9, c: '#677D89',
    }, {
      s: 1, column: 9, row: 11, c: '#B4BCBE',
    },
  ],
  [ // wings top
    {
      s: 1, column: 7, row: 2, c: white,
    }, {
      s: 1, column: 7, row: 3, c: '#ECF7FA',
    }, {
      s: 1, column: 7, row: 4, c: '#C0CED4',
    }, {
      s: 2, column: 8, row: 3, c: '#FBFDFF',
    }, {
      s: 1, column: 10, row: 4, c: '#EEEBE6',
    }, {
      s: 1, column: 7, row: 5, c: black,
    }, {
      s: 1, column: 8, row: 5, c: black,
    }, {
      s: 1, column: 9, row: 5, c: black,
    }, {
      s: 1, column: 10, row: 5, c: '#F5F4F2',
    }, {
      s: 3, column: 11, row: 5, c: '#99B0B8', main: true,
    }, {
      s: 1, column: 8, row: 6, c: '#F9FAFC',
    }, {
      s: 1, column: 9, row: 6, c: '#D1DDE4',
    }, {
      s: 1, column: 10, row: 6, c: black,
    },
  ], // bottom wings
  [{
    s: 1, column: 14, row: 6, c: '#EEEBE6',
  }, {
    s: 1, column: 15, row: 6, c: '#FBFDFF',
  }, {
    s: 1, column: 14, row: 7, c: '#022227',
  }, {
    s: 2, column: 15, row: 7, c: '#AABDC8',
  }, {
    s: 1, column: 14, row: 8, c: '#001013',
  }, {
    s: 3, column: 11, row: 8, c: black, main: true,
  }, {
    s: 2, column: 10, row: 11, c: black,
  }, {
    s: 1, column: 12, row: 11, c: '#EEEBE6',
  }, {
    s: 1, column: 12, row: 12, c: '#FBFDFF',
  },
  ], // legs
  [{
    s: 2, column: 8, row: 12, c: '#D6DEE0',
  }, {
    s: 1, column: 10, row: 13, c: white,
  }, {
    s: 1, column: 8, row: 14, c: '#BECACD',
  }, {
    s: 3, column: 9, row: 14, c: '#8AAFBD', main: true,
  }, {
    s: 2, column: 7, row: 15, c: '#B4BFC3',
  }, {
    s: 1, column: 8, row: 17, c: '#8EA0A4',
  }, {
    s: 1, column: 8, row: 18, c: black,
  }, {
    s: 1, column: 8, row: 19, c: black,
  }, {
    s: 1, column: 8, row: 20, c: black,
  }, {
    s: 1, column: 8, row: 21, c: black,
  }, {
    s: 1, column: 8, row: 22, c: black,
  }, {
    s: 1, column: 8, row: 23, c: black,
  }, {
    s: 1, column: 8, row: 24, c: black,
  }, {
    s: 1, column: 11, row: 17, c: '#8EA0A4',
  }, {
    s: 1, column: 12, row: 17, c: black,
  }, {
    s: 1, column: 12, row: 18, c: black,
  }, {
    s: 1, column: 12, row: 19, c: black,
  }, {
    s: 1, column: 12, row: 20, c: black,
  }, {
    s: 1, column: 12, row: 21, c: black,
  }, {
    s: 1, column: 12, row: 22, c: black,
  }, {
    s: 1, column: 12, row: 23, c: black,
  }, {
    s: 1, column: 12, row: 24, c: black,
  },
  ],
];

const rockRight = [[
  {
    s: 2, column: 1, row: 2, c: '#A4B5BD',
  }, {
    s: 3, column: 3, row: 1, c: '#C5CDD0', main: true, position: 'right',
  },
]];

export const arrCraneSunset = [sun, cloudLeft, cloudRight, rockLeft, baby, adult, rockRight];
export const colorCraneSunset = '#004953';
