import { connect } from 'react-redux';
import {
  updateValueGlobal,
} from 'src/reducer/slices/globalSlice';
import Component from './Component';

const mapStateToProps = (state) => ({
  colorMainL1: state.global.colorMainL1,
  colorMain: state.global.colorMain,
  menuIsOpen: state.global.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  updateValueGlobal: (payload) => dispatch(updateValueGlobal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
