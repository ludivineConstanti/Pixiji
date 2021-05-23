import { connect } from 'react-redux';
import { cheatingButtonFinishQuiz } from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    currentQuizId: state.quiz.currentQuizId,
    currentQuizTitle: state.quiz[current].title,
    dataQuizzes: state.quiz.dataQuizzes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  restartQuiz: (payload) => dispatch(cheatingButtonFinishQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
