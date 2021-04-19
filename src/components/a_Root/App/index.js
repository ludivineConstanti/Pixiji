import { connect } from 'react-redux';
import { updateIdQuiz, initializeQuiz } from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  dataQuizzes: state.quiz.dataQuizzes,
});

const mapDispatchToProps = (dispatch) => ({
  updateIdQuiz: (payload) => dispatch(updateIdQuiz(payload)),
  initializeQuiz: (payload) => dispatch(initializeQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
