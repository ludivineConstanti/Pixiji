import { connect } from 'react-redux';
import {
  updateValueQuiz,
} from 'src/reducer/actions/quizActions';
import Component from './Component';

const mapStateToProps = (state) => ({
  answeredQuestion: state.quiz.user.answeredQuestion,
  answeredCorrectly: state.quiz.user.answeredCorrectly,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueQuiz: (obj, prop, value) => dispatch(updateValueQuiz(obj, prop, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
