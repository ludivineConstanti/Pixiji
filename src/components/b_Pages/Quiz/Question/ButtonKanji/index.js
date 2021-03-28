import { connect } from 'react-redux';
import {
  updateValueQuiz, answeredQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.UI.colorMain,
  rightAnswer: state.quiz.dataQuiz[0].arrAnswers[state.quiz.dataQuiz[0].infosAnswer.answerIndex],
});

const mapDispatchToProps = (dispatch) => ({
  updateValueQuiz: (payload) => dispatch(updateValueQuiz(payload)),
  answeredQuestionQuiz: (payload) => dispatch(answeredQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
