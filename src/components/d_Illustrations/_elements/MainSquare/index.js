import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  rightAnswers: state.quiz.user.rightAnswers,
});

export default connect(mapStateToProps, {}, null, { forwardRef: true })(Component);
