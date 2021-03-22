// first the ones from the left, then from top to bottom
// small Planet
export default {
  width: 10,
  height: 10,
  squares: {
    0: {
      main: {
        x: 1, y: 1, size: 3, fill: '#6DC7F4',
      },
      deco: [{
        x: 0, y: 3, size: 1, fill: '#60ACD2',
      }, {
        x: 0, y: 4, size: 2, fill: '#5897B7',
      }, {
        x: 3, y: 0, size: 1, fill: '#B6E7FF',
      }, {
        x: 4, y: 0, size: 2, fill: '#83D0F6',
      }],
    },
    1: {
      main: {
        x: 6, y: 1, size: 3, fill: '#58BDF0',
      },
      deco: [{
        x: 4, y: 2, size: 2, fill: '#5AB2DE',
      }, {
        x: 6, y: 0, size: 1, fill: '#B6E7FF',
      },
      {
        x: 6, y: 4, size: 2, fill: '#40728B',
      }, {
        x: 9, y: 3, size: 1, fill: '#6CC9F8',
      }],
    },
    2: {
      main: {
        x: 1, y: 6, size: 3, fill: '#1D4154',
      },
      deco: [{
        x: 0, y: 6, size: 1, fill: '#35637A',
      }, {
        x: 2, y: 4, size: 2, fill: '#3D7E9E',
      }, {
        x: 3, y: 9, size: 1, fill: '#2F4767',
      }, {
        x: 4, y: 6, size: 2, fill: '#284F64',
      },
      ],
    },
    3: {
      main: {
        x: 6, y: 6, size: 3, fill: '#324968',
      },
      deco: [{
        x: 4, y: 8, size: 2, fill: '#203E4E',
      }, {
        x: 6, y: 9, size: 1, fill: '#284A67',
      }, {
        x: 8, y: 4, size: 2, fill: '#4788A8',
      }, {
        x: 9, y: 6, size: 1, fill: '#26415A',
      }],
    },
  },
  final: [{
    x: 4, y: 4, size: 2, fill: '#48819D',
  }],
};
