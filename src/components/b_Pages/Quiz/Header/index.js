import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  totalOptions: state.quiz.totalOptions,
  title: state.quiz.title,
});

export default connect(mapStateToProps, {})(Component);
