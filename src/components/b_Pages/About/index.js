import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  kanjisArr: state.kanjisArr.about,
  quizzesSlug: state.quizzes.currentSlug,
});

export default connect(mapStateToProps, {})(Component);
