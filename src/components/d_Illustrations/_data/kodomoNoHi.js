const fishMaker = (hue) => {
  const lightL1 = `hsl(${hue}, 4%, 95%)`;
  const light = `hsl(${hue}, 15%, 85%)`;
  const colorL1 = `hsl(${hue}, 33%, 67%)`;
  const color = `hsl(${hue}, 46%, 52%)`;
  const colorD1 = `hsl(${hue}, 65%, 39%)`;
  const colorD2 = `hsl(${hue}, 75%, 33%)`;
  const colorD3 = `hsl(${hue}, 81%, 28%)`;
  const colorD4 = `hsl(${hue}, 85%, 22%)`;
  const colorD5 = `hsl(${hue}, 89%, 18%)`;
  const dark = `hsl(${hue}, 91%, 16%)`;

  return [[{ // rope
    s: 1, column: 1, row: 5, c: lightL1,
  }, {
    s: 1, column: 2, row: 5, c: lightL1,
  }, { // mouth
    s: 1, column: 3, row: 4, c: lightL1,
  }, {
    s: 1, column: 3, row: 5, c: light,
  }, {
    s: 1, column: 3, row: 6, c: light,
  }, { // head
    s: 1, column: 4, row: 4, c: colorL1,
  }, {
    s: 1, column: 4, row: 5, c: color,
  }, {
    s: 1, column: 4, row: 6, c: color,
  }, {
    s: 1, column: 5, row: 3, c: colorL1,
  }, {
    s: 1, column: 5, row: 4, c: colorL1,
  }, {
    s: 1, column: 5, row: 5, c: light,
  }, {
    s: 1, column: 5, row: 6, c: light,
  }, {
    s: 1, column: 5, row: 7, c: colorD1,
  }, {
    s: 1, column: 6, row: 3, c: colorL1,
  }, {
    s: 1, column: 6, row: 4, c: lightL1,
  }, {
    s: 1, column: 6, row: 5, c: dark,
  }, {
    s: 1, column: 6, row: 6, c: light,
  }, {
    s: 1, column: 6, row: 7, c: colorD1,
  }, {
    s: 1, column: 7, row: 3, c: colorL1,
  }, {
    s: 1, column: 7, row: 4, c: lightL1,
  }, {
    s: 1, column: 7, row: 5, c: lightL1,
  }, {
    s: 2, column: 7, row: 6, c: colorD1,
  }, {
    s: 1, column: 8, row: 3, c: lightL1,
  }, {
    s: 1, column: 8, row: 4, c: color,
  }, {
    s: 1, column: 8, row: 5, c: color,
  }, {
    s: 1, column: 9, row: 3, c: color,
  }, {
    s: 1, column: 9, row: 4, c: lightL1,
  }, {
    s: 1, column: 9, row: 5, c: light,
  }, {
    s: 1, column: 9, row: 6, c: light,
  }, {
    s: 1, column: 9, row: 7, c: light,
  }, {
    s: 2, column: 10, row: 3, c: color,
  }, {
    s: 3, column: 10, row: 5, c: colorD1, main: true,
  }], [{ // fin top
    s: 1, column: 7, row: 2, c: colorD5,
  }, {
    s: 1, column: 8, row: 2, c: colorD5,
  }, {
    s: 1, column: 9, row: 2, c: colorD5,
  }, {
    s: 1, column: 10, row: 2, c: colorD5,
  }, {
    s: 1, column: 11, row: 2, c: colorD5,
  }, {
    s: 1, column: 12, row: 2, c: colorD5,
  }, {
    s: 1, column: 13, row: 2, c: colorD5,
  }, {
    s: 1, column: 14, row: 2, c: colorD5,
  }, { // body
    s: 2, column: 12, row: 3, c: color,
  }, {
    s: 2, column: 14, row: 3, c: colorD1,
  }, {
    s: 3, column: 13, row: 5, c: colorD2, main: true,
  }], [{
    s: 3, column: 16, row: 3, c: colorD3, main: true,
  }, {
    s: 1, column: 16, row: 6, c: colorD4,
  }, {
    s: 2, column: 19, row: 3, c: colorD4,
  }, {
    s: 2, column: 21, row: 3, c: colorD5,
  }, {
    s: 1, column: 22, row: 5, c: colorD5,
  }, {
    s: 1, column: 22, row: 2, c: colorD5,
  }, {
    s: 1, column: 23, row: 2, c: colorD5,
  }, {
    s: 1, column: 23, row: 3, c: colorD5,
  }, {
    s: 1, column: 23, row: 1, c: colorD5,
  }]];
};

const fish0 = fishMaker(150);
const fish1 = fishMaker(190);
const fish2 = fishMaker(359);

export const arrKodomoNoHi = [fish0, fish1, fish2];
export const colorKodomoNoHi = '#050024';
