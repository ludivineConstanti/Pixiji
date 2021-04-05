import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  finishedQuiz: state.quiz.current.totalQuestions === state.quiz.user.rightAnswers.length,
});

export default connect(mapStateToProps, {})(Component);
