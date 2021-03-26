import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/actions/globalActions';
import Component from './Component';

const mapStateToProps = (state) => ({
  kanjisArr: state.quiz.user.rightAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (obj, prop, value) => dispatch(updateValueGlobal(obj, prop, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
