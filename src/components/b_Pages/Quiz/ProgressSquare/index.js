import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    finishedQuiz: state.quiz[current].finished,
  };
};

export default connect(mapStateToProps, {})(Component);
