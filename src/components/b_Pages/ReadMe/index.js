import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  quizzesSlug: state.quiz.currentSlug,
  kanjisArr: state.kanjisArr.readMe,
});

export default connect(mapStateToProps, {})(Component);
