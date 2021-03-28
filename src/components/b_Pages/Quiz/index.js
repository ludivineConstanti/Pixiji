import { connect } from 'react-redux';
import {
  nextQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  answeredQuestion: state.quiz.user.answeredQuestion,
  answeredCorrectly: state.quiz.user.answeredCorrectly,
  finishedQuiz: state.quiz.current.totalQuestions === state.quiz.user.rightAnswers.length,
});

const mapDispatchToProps = (dispatch) => ({
  nextQuestionQuiz: () => dispatch(nextQuestionQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
