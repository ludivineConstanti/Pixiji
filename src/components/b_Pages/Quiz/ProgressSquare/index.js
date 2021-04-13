import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  finishedQuiz: state.quiz.current.finished,
});

export default connect(mapStateToProps, {})(Component);
