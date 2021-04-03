import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import {
  cheatingButtonFinishQuiz,
} from 'src/reducer/slices/quizSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.UI.colorMain,
  menuIsOpen: state.global.UI.menuIsOpen,
  cheating: state.global.current.cheating,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
  cheatingButtonFinishQuiz: () => dispatch(cheatingButtonFinishQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
