import { connect } from 'react-redux';
import {
  nextQuestionQuiz,
  cheatingButtonFinishQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => {
  const current = `quiz${state.quiz.currentQuizId}`;
  return {
    answeredQuestion: state.quiz[current].answeredQuestion,
    answeredCorrectly: state.quiz[current].answeredCorrectly,
    finishedQuiz: state.quiz[current].finished,
    kanjisArr: state.quiz[current].rightAnswers,
    dataQuizzes: state.quiz.dataQuizzes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  nextQuestionQuiz: (payload) => dispatch(nextQuestionQuiz(payload)),
  restartQuiz: (payload) => dispatch(cheatingButtonFinishQuiz(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
