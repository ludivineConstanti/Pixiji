import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  questionNumber: state.current.totalQuestions,
  currentNumber: state.quiz.user.rightAnswers.length,
});

export default connect(mapStateToProps, {})(Component);
