import { connect } from 'react-redux';
import {
  nextQuestionQuiz,
  initializeQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  answeredQuestion: state.quiz.user.answeredQuestion,
  answeredCorrectly: state.quiz.user.answeredCorrectly,
  finishedQuiz: state.quiz.current.totalQuestions === state.quiz.user.rightAnswers.length,
  kanjisArr: state.quiz.user.rightAnswers,
  dataQuizzes: state.quiz.dataQuizzes,
});

const mapDispatchToProps = (dispatch) => ({
  initializeQuiz: (payload) => dispatch(initializeQuiz(payload)),
  nextQuestionQuiz: () => dispatch(nextQuestionQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
