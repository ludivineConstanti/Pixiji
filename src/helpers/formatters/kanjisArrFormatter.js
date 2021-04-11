import kanjis from 'src/assets/dataQuiz/kanjis';
import shuffle from '../shuffle';

export default (kanjisNum) => {
  shuffle(kanjis);
  const kanjisArr = [];
  for (let i = 0; i < kanjisNum; i += 1) {
    kanjisArr.push(kanjis.shift());
  }
  return kanjisArr;
};

export const getKanjisNum = (arrOfArrs) => {
  let length = 0;
  arrOfArrs.forEach((arr) => {
    length += arr.length;
  });
  return length;
};
