import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  questionNumber: state.quiz.totalQuestions,
  currentNumber: state.quiz.rightAnswers.length,
  finishedQuiz: state.quiz.finished,
});

export default connect(mapStateToProps, {})(Component);
