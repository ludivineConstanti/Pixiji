import { connect } from 'react-redux';
import {
  answeredQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.colorMain,
  correctAnswer: state.quiz.dataQuiz[0].arrAnswers[state.quiz.dataQuiz[0].infosAnswer.answerIndex],
  cheating: state.global.cheating,
});

const mapDispatchToProps = (dispatch) => ({
  answeredQuestionQuiz: (payload) => dispatch(answeredQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
