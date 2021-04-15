import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    questionNumber: state.quiz[current].totalQuestions,
    currentNumber: state.quiz[current].rightAnswers.length,
    finishedQuiz: state.quiz[current].finished,
  };
};

export default connect(mapStateToProps, {})(Component);
