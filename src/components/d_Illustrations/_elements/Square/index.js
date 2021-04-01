import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  rightAnswersLength: state.quiz.user.rightAnswers.length,
});

export default connect(mapStateToProps, {}, null, { forwardRef: true })(Component);
