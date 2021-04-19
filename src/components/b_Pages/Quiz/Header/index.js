import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    quizId: state.quiz.currentQuizId,
    totalOptions: state.quiz[current].totalOptions,
    title: state.quiz[current].title,
    finishedQuiz: state.quiz[current].finished,
  };
};

export default connect(mapStateToProps, {})(Component);
