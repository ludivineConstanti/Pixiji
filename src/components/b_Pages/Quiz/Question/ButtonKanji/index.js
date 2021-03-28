import { connect } from 'react-redux';
import {
  answeredQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.UI.colorMain,
});

const mapDispatchToProps = (dispatch) => ({
  answeredQuestionQuiz: (payload) => dispatch(answeredQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
