import { connect } from 'react-redux';
import {
  updateValueQuiz, answeredCorrectlyQuiz,
} from 'src/reducer/actions/quizActions';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.UI.colorMain,
  rightAnswer: state.quiz.current.rightAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueQuiz: (obj, prop, value) => dispatch(updateValueQuiz(obj, prop, value)),
  answeredCorrectlyQuiz: (payload) => dispatch(answeredCorrectlyQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
