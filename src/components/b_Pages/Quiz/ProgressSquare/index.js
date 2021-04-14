import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  finishedQuiz: state.quiz.finished,
});

export default connect(mapStateToProps, {})(Component);
