import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  quizzesData: state.quiz.dataQuizzes,
});

export default connect(mapStateToProps, {})(Component);
