import { connect } from 'react-redux';
import {
  updateFirstQuestionQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    dataObj: state.quiz[current].dataQuiz[0],
    answeredQuestion: state.quiz[current].answeredQuestion,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFirstQuestionQuiz: (payload) => dispatch(updateFirstQuestionQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
