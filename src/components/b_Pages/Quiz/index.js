import { connect } from 'react-redux';
import {
  updateValueQuiz,
} from 'src/reducer/actions/quiz';
import Component from './Component';

const mapStateToProps = (state) => ({
  userAnswer: state.quiz.user.answer,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueQuiz: (obj, prop, value) => dispatch(updateValueQuiz(obj, prop, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
