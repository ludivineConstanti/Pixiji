import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMain: state.global.colorMain,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
