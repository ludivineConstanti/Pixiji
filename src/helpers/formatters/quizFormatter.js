import shuffle from '../shuffle';

export default (dataQuiz) => {
  shuffle(dataQuiz);
  const answers11 = (11 - (dataQuiz.length % 12)) + 1;
  if (answers11 - 1 > dataQuiz.length / 12) {
    console.error('the current quizFormatter does not work for this data length');
  }
  const answers12 = Math.ceil(dataQuiz.length / 12) - answers11;
  const quizFormatted = [];
  const infosAnswer = { answerIndex: false, answeredRight: 0, answeredWrong: 0 };
  for (let i = 0; i < answers12; i += 1) {
    quizFormatted.push({ infosAnswer, arrAnswers: dataQuiz.slice(i * 12, (i * 12) + 12) });
  }
  const offset = answers12 * 12;
  for (let i = 0; i < answers11; i += 1) {
    quizFormatted.push({
      infosAnswer,
      arrAnswers: dataQuiz.slice(offset + (i * 11), offset + ((i * 11) + 11)),
    });
  }
  return quizFormatted;
};
