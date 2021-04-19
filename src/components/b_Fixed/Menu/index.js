import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import {
  cheatingButtonFinishQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    colorMainL1: state.global.colorMainL1,
    menuIsOpen: state.global.menuIsOpen,
    cheating: state.global.cheating,
    finishedQuiz: state.quiz[current].finished,
    quizzesSlug: state.quiz.currentSlug,
    currentQuizId: state.quiz.currentQuizId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
  cheatingButtonFinishQuiz: (payload) => dispatch(cheatingButtonFinishQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
