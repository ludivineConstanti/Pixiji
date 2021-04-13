import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  questionNumber: state.quiz.current.totalQuestions,
  currentNumber: state.quiz.user.rightAnswers.length,
  finishedQuiz: state.quiz.current.finished,
});

export default connect(mapStateToProps, {})(Component);
