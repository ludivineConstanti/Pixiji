import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state, ownProps) => ({
  dataQuizzes: state.quiz.dataQuizzes,
  totalOptions: state.quiz[`quiz${ownProps.currentQuiz.id}`].totalOptions,
  kanjisArr: state.quiz[`quiz${ownProps.currentQuiz.id}`].wrongAnswers,
});

export default connect(mapStateToProps, {})(Component);
