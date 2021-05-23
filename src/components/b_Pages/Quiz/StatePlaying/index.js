import { connect } from 'react-redux';
import { nextQuestionQuiz } from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    answeredQuestion: state.quiz[current].answeredQuestion,
    answeredCorrectly: state.quiz[current].answeredCorrectly,
    currentQuizId: state.quiz.currentQuizId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  nextQuestionQuiz: (payload) => dispatch(nextQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
