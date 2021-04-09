// pink light
const pinkL1 = '#F2BEDD';
const pink = '#EB8DC5';
// pink dark
const pinkD1 = '#C94D98';
const pinkD2 = '#9B3471';

const tree0 = [[{
  s: 4, column: 3, row: 1, c: pink, main: true,
}, {
  s: 2, column: 1, row: 5, c: pink,
}], [{
  s: 2, column: 3, row: 5, c: pinkL1,
}, {
  s: 4, column: 7, row: 5, c: pinkD1, main: true,
}], [{
  s: 4, column: 3, row: 9, c: pinkD2, main: true,
}]];

const tree1 = [[{
  s: 6, column: 1, row: 1, c: pink, main: true,
}, {
  s: 2, column: 3, row: 7, c: pinkL1,
}], [{
  s: 2, column: 7, row: 5, c: pinkL1,
}, {
  s: 4, column: 9, row: 7, c: pinkD1, main: true,
}], [{
  s: 4, column: 7, row: 11, c: pink, main: true,
}]];

const tree2 = [[{
  s: 6, column: 1, row: 2, c: pink, main: true,
}], [{
  s: 3, column: 7, row: 5, c: pinkL1, main: true,
}], [{
  s: 2, column: 8, row: 3, c: pink,
}, {
  s: 4, column: 10, row: 1, c: pinkD1, main: true,
}]];

const tree3 = [[{
  s: 2, column: 1, row: 3, c: pink,
}, {
  s: 2, column: 3, row: 1, c: pinkL1,
}, {
  s: 6, column: 1, row: 9, c: pinkD2, main: true,
}], [{
  s: 2, column: 5, row: 3, c: pinkD2,
}, {
  s: 4, column: 7, row: 5, c: pinkD1, main: true,
}], [{
  s: 2, column: 15, row: 3, c: pinkD1,
}, {
  s: 6, column: 11, row: 5, c: pinkL1, main: true, position: 'right',
}], [{
  s: 2, column: 7, row: 9, c: pink,
}, {
  s: 6, column: 9, row: 11, c: pinkD1, main: true,
}, {
  s: 2, column: 15, row: 17, c: pinkL1,
}], [{
  s: 4, column: 5, row: 17, c: pinkD2, main: true,
}, {
  s: 2, column: 11, row: 17, c: pink,
}], [{
  s: 2, column: 13, row: 19, c: pinkD1, main: true,
}, {
  s: 4, column: 9, row: 21, c: pinkD2, main: true,
}]];

const light = '#FFE8DD';
const brownL5 = '#FFBE9D';
const brownL4 = '#F3A076';
const brownL3 = '#F3A076';
const brownL2 = '#EB8856';
const brownL1 = '#E3743C';
const brown = '#D2632B';
const brownD1 = '#C85E28';
const brownD2 = '#A84A19';
const brownD3 = '#943C0F';
const brownD4 = '#78310C';
const brownD5 = '#692A0A';
const brownD6 = '#401804';
const dark = '#230701';

const deer = [[{ // horn left
  s: 1, column: 1, row: 1, c: brownD5,
}, {
  s: 1, column: 1, row: 2, c: brownD4,
}, {
  s: 1, column: 3, row: 2, c: brownD4,
}, {
  s: 1, column: 1, row: 3, c: brownD3,
}, {
  s: 1, column: 2, row: 3, c: brownD3,
}, {
  s: 1, column: 3, row: 3, c: brownD3,
}, {
  s: 1, column: 3, row: 4, c: brownD2,
}, {
  s: 1, column: 3, row: 5, c: brownD1,
}, { // horn right
  s: 1, column: 9, row: 1, c: brownD5,
}, {
  s: 1, column: 9, row: 2, c: brownD4,
}, {
  s: 1, column: 7, row: 2, c: brownD4,
}, {
  s: 1, column: 7, row: 3, c: brownD3,
}, {
  s: 1, column: 8, row: 3, c: brownD3,
}, {
  s: 1, column: 9, row: 3, c: brownD3,
}, {
  s: 1, column: 7, row: 4, c: brownD2,
}, {
  s: 1, column: 7, row: 5, c: brownD1,
}, { // left ear
  s: 1, column: 1, row: 4, c: brownL2,
}, {
  s: 1, column: 2, row: 5, c: brownL4,
}, { // right ear
  s: 1, column: 9, row: 4, c: brownL2,
}, {
  s: 1, column: 8, row: 5, c: brownL4,
}, { // head
  s: 1, column: 4, row: 5, c: brownL2,
}, {
  s: 1, column: 5, row: 5, c: brownL2,
}, {
  s: 1, column: 6, row: 5, c: brownL2,
}, {
  s: 1, column: 3, row: 6, c: brownL2,
}, {
  s: 1, column: 4, row: 6, c: brownL3,
}, {
  s: 1, column: 5, row: 6, c: brownL1,
}, {
  s: 1, column: 6, row: 6, c: brownL3,
}, {
  s: 1, column: 7, row: 6, c: brownL2,
}, {
  s: 1, column: 3, row: 7, c: brownL3,
}, {
  s: 1, column: 4, row: 7, c: dark,
}, {
  s: 1, column: 5, row: 7, c: brown,
}, {
  s: 1, column: 6, row: 7, c: dark,
}, {
  s: 1, column: 7, row: 7, c: brownL3,
}, {
  s: 1, column: 3, row: 8, c: brownL5,
}, {
  s: 1, column: 4, row: 8, c: brownL4,
}, {
  s: 1, column: 5, row: 8, c: brownL1,
}, {
  s: 1, column: 6, row: 8, c: brownL3,
}, {
  s: 1, column: 7, row: 8, c: brownL5,
}, {
  s: 1, column: 4, row: 9, c: light,
}, {
  s: 1, column: 5, row: 9, c: dark,
}, {
  s: 1, column: 6, row: 9, c: light,
}, {
  s: 1, column: 5, row: 10, c: brownL2,
}]];

export const arrSakuraDeer = [tree0, tree1, tree2, tree3, deer];
export const colorSakuraDeer = '#260101';
