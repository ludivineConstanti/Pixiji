import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state, ownProps) => ({
  dataQuizzes: state.quizzes.data,
  totalOptions: state.quiz[`quiz${ownProps.currentQuiz.id}`].totalOptions,
});

export default connect(mapStateToProps, {})(Component);
