import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  quizzesData: state.quizzes.data,
});

export default connect(mapStateToProps, {})(Component);
