import { connect } from 'react-redux';
import {
  nextQuestionQuiz,
  initializeQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  answeredQuestion: state.quiz.answeredQuestion,
  answeredCorrectly: state.quiz.answeredCorrectly,
  finishedQuiz: state.quiz.finished,
  kanjisArr: state.quiz.rightAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  initializeQuiz: (payload) => dispatch(initializeQuiz(payload)),
  nextQuestionQuiz: () => dispatch(nextQuestionQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
