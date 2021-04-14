import { connect } from 'react-redux';
import {
  nextQuestionQuiz,
  initializeQuiz,
  cheatingButtonFinishQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  answeredQuestion: state.quiz.answeredQuestion,
  answeredCorrectly: state.quiz.answeredCorrectly,
  finishedQuiz: state.quiz.finished,
  kanjisArr: state.quiz.rightAnswers,
  dataQuizzes: state.quizzes.data,
});

const mapDispatchToProps = (dispatch) => ({
  initializeQuiz: (payload) => dispatch(initializeQuiz(payload)),
  nextQuestionQuiz: () => dispatch(nextQuestionQuiz()),
  restartQuiz: () => dispatch(cheatingButtonFinishQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
