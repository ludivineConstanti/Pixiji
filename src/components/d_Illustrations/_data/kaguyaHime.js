const moon = [[{
  s: 4, column: 1, row: 1, c: '#DBBB68', main: true,
}]];

const brown = '#3E322E';
const brownD1 = '#2D2826';
const brownD2 = '#211E1D';

// use the same colors for the bamboos
export const greenL1 = '#BFDEBC';
export const green = '#ACD4A9';

const pinkL2 = '#FAD3C2';
const pinkL1 = '#F8BBBB';
const pink = '#FAA3A3';
const pinkD1 = '#F18C8B';
const pinkD2 = '#E56E6D';
const pinkD3 = '#D66160';
const pinkD4 = '#CB5B5B';

const hime = [[{ // hair
  s: 2, column: 11, row: 1, c: brownD1,
}, {
  s: 2, column: 13, row: 1, c: brownD2,
}, {
  s: 2, column: 9, row: 3, c: brown,
}, {
  s: 2, column: 11, row: 3, c: brown,
}, {
  s: 2, column: 13, row: 3, c: brownD1,
}, {
  s: 2, column: 15, row: 3, c: brownD1,
}, {
  s: 2, column: 9, row: 5, c: brown,
}, {
  s: 2, column: 9, row: 7, c: brown,
}, {
  s: 2, column: 15, row: 5, c: brownD1,
}, {
  s: 2, column: 15, row: 7, c: brownD1,
}, { // face
  s: 4, column: 11, row: 5, c: pinkL2, main: true,
}, {
  s: 2, column: 11, row: 9, c: greenL1,
}, {
  s: 2, column: 13, row: 9, c: green,
}], [{
  s: 2, column: 9, row: 9, c: pinkL2,
}, {
  s: 4, column: 7, row: 11, c: pinkL1, main: true,
}], [{
  s: 4, column: 11, row: 11, c: pinkL2, main: true,
}], [{
  s: 2, column: 15, row: 9, c: pinkL1,
}, {
  s: 4, column: 15, row: 11, c: pink, main: true,
}], [{
  s: 4, column: 1, row: 15, c: pinkL2, main: true,
}], [{
  s: 4, column: 5, row: 15, c: pink, main: true,
}, {
  s: 2, column: 9, row: 15, c: pinkD1,
}], [{
  s: 2, column: 9, row: 17, c: pinkD2,
}, {
  s: 4, column: 11, row: 15, c: pinkD4, main: true,
}, {
  s: 2, column: 15, row: 17, c: pinkD3,
}], [{
  s: 2, column: 15, row: 15, c: pinkD2,
}, {
  s: 4, column: 17, row: 15, c: pinkD1, main: true,
}], [{
  s: 4, column: 21, row: 15, c: pinkL1, main: true,
}]];

export const arrKaguyaHime = [moon, hime];
export const colorKaguyaHime = '#001C01';
