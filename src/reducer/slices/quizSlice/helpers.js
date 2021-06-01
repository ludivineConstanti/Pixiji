import kanjis from 'src/assets/dataQuiz/kanjis';
import quizFormatter from 'src/helpers/formatters/quizFormatter';
import kanjisInitial from 'src/assets/dataQuiz/kanjisInitial';
import quizzes from 'src/assets/dataQuiz/quizzes';

export const initialStateQuiz = (quizId) => {
  const currentQuiz = kanjis.filter((e) => e.quizId === quizId);
  return {
    dataQuiz: quizFormatter(kanjisInitial),
    totalQuestions: 0,
    totalOptions: currentQuiz.length,
    title: quizzes[quizId - 1].title,
    finished: false,
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers: [],
    wrongAnswers: [],
  };
};

export const initialState = {
  dataQuizzes: quizzes,
  currentQuizId: 1,
  currentSlug: quizzes[0].slug,
  quiz1: initialStateQuiz(1),
  quiz2: initialStateQuiz(2),
  quiz3: initialStateQuiz(3),
};

export const emptyAnswer = {
  answer: {
    kanji: '', en: '', kana: '', kanaEn: '',
  },
  infosAnswer: { answeredRight: 1, answeredWrong: 0 },
};

// put it there since I need it in 2 different actions
export const initialize = (state, payload) => {
  const { quizId } = payload;

  const cQ = state[`quiz${quizId}`];
  const currentQuiz = kanjis.filter((e) => e.quizId === quizId);
  const formattedQuiz = quizFormatter(currentQuiz);
  cQ.dataQuiz = formattedQuiz;

  if (cQ.totalQuestions === 0) {
    cQ.totalQuestions = formattedQuiz.length;
  }

  cQ.finished = false;
  cQ.answeredQuestion = false;
  cQ.answeredCorrectly = false;
  cQ.rightAnswers = [];
};
