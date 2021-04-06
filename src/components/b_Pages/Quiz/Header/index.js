import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  totalOptions: state.quiz.current.totalOptions,
  title: state.quiz.current.title,
});

export default connect(mapStateToProps, {})(Component);
