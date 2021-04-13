import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  dataQuizzes: state.quiz.dataQuizzes,
});

export default connect(mapStateToProps, {})(Component);
