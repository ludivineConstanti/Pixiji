const orangeL4 = '#FFDFD9';
const orangeL3 = '#FFBFB3';
export const orangeL2 = '#FFA897';
const orangeL1 = '#FF9A86';
const orange = '#FF866F';
const orangeD1 = '#F76C52';
const orangeD2 = '#E05A41';

const blueL3 = '#B8E8FD';
const blueL2 = '#82D8FF';
const blueL1 = '#5BC2F0';
const blue = '#39B5EC';
const blueD1 = '#1AA1DD';
const blueD2 = '#1677A3';

const dark = '#0057A8';

const cloudTop = [[{
  s: 1, column: 1, row: 4, c: orangeL2,
}, {
  s: 2, column: 2, row: 3, c: orangeL3,
}, {
  s: 4, column: 4, row: 1, c: orangeL2, main: true,
}, {
  s: 2, column: 8, row: 3, c: orangeL3,
}, {
  s: 1, column: 10, row: 4, c: orangeL2,
}, {
  s: 1, column: 11, row: 4, c: orangeL3,
}, {
  s: 1, column: 12, row: 4, c: orangeL2,
}]];

const dragon = [[{ // top tail (orange part)
  s: 1, column: 3, row: 1, c: orangeL4,
}, {
  s: 1, column: 4, row: 2, c: orangeL3,
}, {
  s: 1, column: 5, row: 2, c: orangeL2,
}, {
  s: 1, column: 6, row: 2, c: orangeL2,
}, {
  s: 2, column: 6, row: 3, c: orangeL1,
}, {
  s: 1, column: 7, row: 5, c: orange,
}, {
  s: 2, column: 6, row: 6, c: orangeL1,
}, {
  s: 1, column: 6, row: 8, c: orange,
}, { // tail (blue part)
  s: 1, column: 5, row: 9, c: blueL2,
}, {
  s: 1, column: 4, row: 9, c: blueL2,
}, {
  s: 1, column: 4, row: 10, c: blueL1,
}, {
  s: 1, column: 3, row: 10, c: blueL1,
}, {
  s: 2, column: 2, row: 11, c: blueL2,
}, {
  s: 1, column: 3, row: 13, c: blueL2,
}, {
  s: 2, column: 1, row: 13, c: blueL1,
}, {
  s: 2, column: 1, row: 15, c: blueD1,
}, {
  s: 1, column: 3, row: 15, c: blueL1,
}, {
  s: 2, column: 3, row: 16, c: blue,
}, {
  s: 2, column: 5, row: 16, c: blueL1,
}, {
  s: 1, column: 6, row: 15, c: blue,
}, {
  s: 1, column: 7, row: 16, c: blue,
}, {
  s: 1, column: 6, row: 14, c: orangeD2,
}, {
  s: 2, column: 7, row: 14, c: blueL1,
}, {
  s: 1, column: 7, row: 13, c: blueL1,
}, {
  s: 2, column: 8, row: 12, c: blueL2,
}, {
  s: 1, column: 8, row: 11, c: orange,
}, {
  s: 1, column: 10, row: 13, c: blueL2,
}, { // back leg
  s: 3, column: 11, row: 13, c: blue, main: true,
}, {
  s: 1, column: 14, row: 14, c: blueL1,
}, {
  s: 1, column: 14, row: 15, c: blue,
}, {
  s: 1, column: 13, row: 16, c: blue,
}, {
  s: 1, column: 12, row: 16, c: blueD1,
}, {
  s: 1, column: 12, row: 17, c: blueD1,
}, {
  s: 1, column: 13, row: 18, c: blueD1,
}, {
  s: 1, column: 14, row: 18, c: blueD2,
}], [{ // back
  s: 1, column: 10, row: 12, c: blueL1,
}, {
  s: 2, column: 9, row: 10, c: blueL1,
}, {
  s: 1, column: 10, row: 9, c: orangeL2,
}, {
  s: 4, column: 11, row: 9, c: blueL2, main: true,
}, {
  s: 1, column: 12, row: 8, c: blueL2,
}, {
  s: 1, column: 13, row: 8, c: orangeL4,
}, {
  s: 1, column: 14, row: 8, c: blueL2,
}], [{
  s: 1, column: 15, row: 8, c: orangeL3,
}, {
  s: 1, column: 16, row: 8, c: blueL1,
}, {
  s: 1, column: 15, row: 9, c: blueL1,
}, {
  s: 1, column: 16, row: 9, c: blueL1,
}, {
  s: 3, column: 15, row: 10, c: blueL1, main: true,
}, {
  s: 1, column: 17, row: 9, c: orangeL2,
}, {
  s: 1, column: 18, row: 10, c: blueL1,
}, {
  s: 1, column: 18, row: 11, c: blueL2,
}, {
  s: 2, column: 18, row: 12, c: blueL2,
}, {
  s: 1, column: 19, row: 11, c: orangeL1,
}, {
  s: 1, column: 20, row: 12, c: blueL2,
}, {
  s: 1, column: 18, row: 14, c: blueL2,
}], [{
  s: 1, column: 20, row: 13, c: blueL1,
}, {
  s: 2, column: 19, row: 14, c: blueL1,
}, {
  s: 1, column: 21, row: 13, c: orange,
}, {
  s: 3, column: 21, row: 14, c: blue, main: true,
}, {
  s: 1, column: 20, row: 16, c: blue,
}, {
  s: 1, column: 23, row: 13, c: orangeD2,
}], [{ // front leg
  s: 2, column: 24, row: 14, c: blueL1,
}, {
  s: 1, column: 24, row: 16, c: blueL1,
}, {
  s: 1, column: 25, row: 16, c: blueL1,
}, {
  s: 1, column: 25, row: 17, c: blueL1,
}, {
  s: 1, column: 26, row: 18, c: blueD1,
}, {
  s: 1, column: 27, row: 18, c: blueD2,
}], [{ // neck
  s: 3, column: 24, row: 11, c: blueL2, main: true,
}, {
  s: 1, column: 26, row: 14, c: blueL2,
}], [{
  s: 1, column: 23, row: 11, c: orange,
}, {
  s: 3, column: 21, row: 8, c: orange, main: true,
}, {
  s: 1, column: 24, row: 9, c: orangeD1,
}, {
  s: 1, column: 24, row: 10, c: orangeD1,
}, {
  s: 1, column: 25, row: 10, c: orangeD2,
}, {
  s: 1, column: 22, row: 7, c: orange,
}], [{
  s: 1, column: 20, row: 8, c: orangeL1,
}, {
  s: 3, column: 19, row: 5, c: orangeL1, main: true,
}, {
  s: 2, column: 19, row: 3, c: orangeL2,
}, {
  s: 1, column: 18, row: 3, c: orangeL3,
}, {
  s: 1, column: 18, row: 4, c: orangeL3,
}, {
  s: 1, column: 18, row: 5, c: orangeL3,
}, {
  s: 1, column: 18, row: 6, c: orangeL3,
}, {
  s: 1, column: 19, row: 2, c: orangeL3,
}, {
  s: 2, column: 20, row: 1, c: orangeL3,
}, { // head
  s: 1, column: 22, row: 2, c: blueL3,
}, {
  s: 1, column: 23, row: 2, c: blueL3,
}, {
  s: 2, column: 21, row: 3, c: blueL2,
}, {
  s: 1, column: 23, row: 3, c: dark,
}, {
  s: 1, column: 23, row: 4, c: blueL2,
}, {
  s: 1, column: 24, row: 4, c: blueL2,
}, {
  s: 1, column: 24, row: 5, c: blueL1,
}]];

const cloudDragon = [[{
  s: 1, column: 1, row: 4, c: orangeL2,
}, {
  s: 1, column: 2, row: 4, c: orangeL3,
}, {
  s: 1, column: 3, row: 4, c: orangeL2,
}, {
  s: 2, column: 4, row: 3, c: orangeL3,
}, {
  s: 3, column: 6, row: 2, c: orangeL2, main: true,
}], [{
  s: 4, column: 9, row: 1, c: orangeL3, main: true,
}], [{
  s: 4, column: 13, row: 1, c: orangeL2, main: true,
}, {
  s: 2, column: 17, row: 3, c: orangeL1,
}], [{
  s: 3, column: 19, row: 2, c: orangeL2, main: true,
}], [{
  s: 4, column: 22, row: 1, c: orangeL3, main: true,
}, {
  s: 2, column: 26, row: 3, c: orangeL2,
}, {
  s: 1, column: 28, row: 4, c: orangeL3,
}, {
  s: 1, column: 29, row: 4, c: orangeL2,
}, {
  s: 1, column: 30, row: 4, c: orangeL3,
}]];

const cloudBL = [[{
  s: 1, column: 1, row: 4, c: orangeL3,
}, {
  s: 2, column: 2, row: 3, c: orangeL2,
}, {
  s: 4, column: 4, row: 1, c: orangeL3, main: true, position: 'bottom',
}], [{
  s: 4, column: 8, row: 1, c: orangeL2, main: true, position: 'bottom',
}, {
  s: 2, column: 12, row: 3, c: orangeL3,
}, {
  s: 1, column: 14, row: 4, c: orangeL2,
}, {
  s: 1, column: 15, row: 4, c: orangeL3,
}, {
  s: 1, column: 16, row: 4, c: orangeL2,
}]];

const cloudBR = [[{
  s: 1, column: 1, row: 4, c: orangeL2,
}, {
  s: 1, column: 2, row: 4, c: orangeL3,
}, {
  s: 1, column: 3, row: 4, c: orangeL2,
}, {
  s: 2, column: 4, row: 3, c: orangeL3,
}, {
  s: 4, column: 6, row: 1, c: orangeL2, main: true, position: 'bottom',
}], [{
  s: 4, column: 10, row: 1, c: orangeL3, main: true, position: 'bottom',
}, {
  s: 2, column: 14, row: 3, c: orangeL2,
}]];

export const arrCloudDragon = [cloudTop, dragon, cloudDragon, cloudBL, cloudBR];
export const colorCloudDragon = '#002A51';
