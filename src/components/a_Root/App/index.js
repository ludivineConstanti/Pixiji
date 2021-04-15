import { connect } from 'react-redux';
import { updateIdQuiz, initializeQuiz } from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  pColorMain: state.global.pColorMain,
  dataQuizzes: state.quizzes.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateIdQuiz: (payload) => dispatch(updateIdQuiz(payload)),
  initializeQuiz: (payload) => dispatch(initializeQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
