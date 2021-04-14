import { connect } from 'react-redux';
import {
  updateFirstQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  dataObj: state.quiz.dataQuiz[0],
  answeredQuestion: state.quiz.answeredQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  updateFirstQuestionQuiz: (payload) => dispatch(updateFirstQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
