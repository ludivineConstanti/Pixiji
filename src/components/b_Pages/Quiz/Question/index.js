import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    dataObj: state.quiz[current].dataQuiz[0],
    answeredQuestion: state.quiz[current].answeredQuestion,
  };
};

export default connect(mapStateToProps, {})(Component);
