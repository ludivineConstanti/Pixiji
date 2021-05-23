import { connect } from 'react-redux';
import { updateIdQuiz } from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state, ownProps) => ({
  dataQuizzes: state.quiz.dataQuizzes,
  totalOptions: state.quiz[`quiz${ownProps.currentQuiz.id}`].totalOptions,
  kanjisArr: state.quiz[`quiz${ownProps.currentQuiz.id}`].wrongAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  updateIdQuiz: (payload) => dispatch(updateIdQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
