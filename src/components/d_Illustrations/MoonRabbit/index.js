import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  kanjisArr: state.quiz.user.rightAnswers,
  grownSquares: state.quiz.current.grownSquares,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
